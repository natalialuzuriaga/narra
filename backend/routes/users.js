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

//Get User using object ID
router.route('/:id').get((req, res) => {
        User.findById(req.params.id)
            .then(user => res.json(user))
            .catch(err => res.status(400).json('Error: '+err));

});

//Update user
router.route('/update/:id').post((req, res) =>{
    User.findById(req.params.id)
   .then(user => {
        user.username = req.body.username;
        user.personalityType = req.body.personalityType;
        user.profilePicture = req.body.profilePicture;
        user.password = req.body.password;
        user.biography = req.body.biography;
        user.friends = req.body.friends;
        user.snapchat = req.body.username;
        user.instagram = req.body.instagram;
        user.twitter = req.body.twitter;
        user.facebook = req.body.username;
        user.discord = req.body.discord;

        user.save()
            .then(() => res.json('User updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
   }) 
   .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;