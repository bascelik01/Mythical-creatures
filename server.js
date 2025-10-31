console.log('🔥 server.js is running...');

require('dotenv').config();

if (!process.env.SESSION_SECRET || !process.env.MONGODB_URI) {
  throw new Error('Missing required environment variables.');
}


console.log('SESSION_SECRET loaded:', process.env.SESSION_SECRET);
console.log('MONGODB_URI loaded:', process.env.MONGODB_URI);

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');

const isSignedIn = require('./middleware/is-signed-in.js');
const passUserToView = require('./middleware/pass-user-to-view.js');
const authController = require('./controllers/auth.js');
const appController = require('./controllers/creatures.js');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 5000
})
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use(passUserToView);

app.use(express.static('public'));
// Routes
app.get('/', (req, res) => {
  if (req.session.user) {
    res.redirect(`/users/${req.session.user._id}/creatures`);
  } else {
    res.render('index.ejs');
  }
});

app.use('/auth', authController);
app.use(isSignedIn);
app.use('/users/:userId/creatures', appController);

// Start server
app.listen(port, () => {
  console.log(`🚀 Express app running on port ${port}`);
});
