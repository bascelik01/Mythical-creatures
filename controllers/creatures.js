const express = require('express');
const router = express.Router();

const User = require('../models/user.js')

router.get('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id)
    res.render("creatures/index.ejs", { creatures: currentUser.creatures })
  } catch (error) {
    console.log(error)
    res.redirect("/")
  }
});

router.get('/new', async (req, res) => {
  try {
    res.render("creatures/new.ejs")
  } catch (error) {
    console.log(error)
  }
})

router.post('/', async (req, res) => {
  try {
    console.log(req.session.user._id)
  
    const currentUser = await User.findById(req.session.user._id)
   
    console.log("current User:", currentUser)
    
    currentUser.creatures.push(req.body)
    console.log("req.body:", req.body)
    
    await currentUser.save();
   
    res.redirect(`/users/${currentUser._id}/creatures`);
  } catch (error) {
    console.log(error)
    res.redirect("/")
  }
})

router.get("/:creatureId", async (req, res) => {
  // res.send(`here is your request for ${req.params.applicationId}`)
  try {
    const currentUser = await User.findById(req.session.user._id)
    const creature = currentUser.creatures.id(req.params.creatureId)
    res.render("creatures/show.ejs", { creature: creature })
  } catch (error) {
    console.log("show Page:", error)
  }
})

router.delete("/:applicationId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id)
    currentUser.creatures.id(req.params.applicationId).deleteOne()
    await currentUser.save()
    res.redirect(`/users/${currentUser._id}/creatures`)
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
})

router.get("/:applicationId/edit", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id)
    const creature = currentUser.creatures.id(req.params.applicationId)
    res.render("creatures/edit.ejs", { creature: creature })

  } catch (error) {
    console.log(error)
  }
})

// controllers/creatures.js`

router.put('/:applicationId', async (req, res) => {
  try {
    // Find the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    // Find the current creature from the id supplied by req.params
    const creature = currentUser.creatures.id(req.params.applicationId);
    // Use the Mongoose .set() method
    // this method updates the current creature to reflect the new form
    // data on `req.body`
    creature.set(req.body);
    // Save the current user
    await currentUser.save();
    // Redirect back to the show view of the current creature
    res.redirect(
      `/users/${currentUser._id}/creatures/${req.params.applicationId}`
    );
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});




module.exports = router