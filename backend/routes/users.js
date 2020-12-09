const router = require('express').Router();
let User = require('../models/user.model');

//Gets All Users
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});

//Get Specific User (Login)

//Add User (Register)
router.route('/add').post((req, res) => {

    //User Fields
    const username = req.body.username;
    const personalityType = req.body.personalityType;
    const profilePicture = req.body.profilePicture;
    const password = req.body.password;
    const biography = req.body.biography;
    const friends = req.body.friends;
    const snapchat = req.body.username;
    const instagram = req.body.instagram;
    const twitter = req.body.twitter;
    const facebook = req.body.username;
    const discord = req.body.discord;

    const newUser = new User({username, personalityType, profilePicture, password, biography, 
        friends, snapchat, instagram, twitter, facebook, discord});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;