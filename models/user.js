const mongoose = require('mongoose');

const creaturesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  rarity: {
    type: String,
    enum: ["common", "uncommon", "rare", "mythical", "legendary"],
    required: true
  },
  type: {
    type: String,
  },
  hp: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true

  }
})

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  creatures: [creaturesSchema]
},
  {
    timestamps: true
  });

const User = mongoose.model('User', userSchema);

module.exports = User;
