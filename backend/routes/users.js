const router = require('express').Router();
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let User = require('../models/user.model');

//Gets All Users
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});

//Authentication (Login)
router.route('/login').post(
[
    //check
    check("username", "Please enter a valid username")
        .not()
        .isEmpty(),

    check("password", "Please enter a valid password").isLength({
        min: 8
    })
],

    async(req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {username, password} = req.body;
        try{
            let user = await User.findOne({
                username
            });
            if(!user){
                return res.status(400).json({
                    message: "User Not Exist"
                });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch){
                return res.status(400).json({
                    message: "Incorrect Password!"
                });
            }

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload, "randomString",
                {
                    expiresIn: 3600
                },
                (err, token) => {
                    if(err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        }
        catch(e){
            console.error(e);
            res.status(500).json({
                message: "Server Error"
            });
        }
    }
);

//Add New User (Register)
router.route('/add').post((req, res) => {

    //validate
    if(await User.findOne({username: req.body.username})) {
        throw 'Username ' + req.body.username + 'is already taken';
    }

    //User Fields
    const username = req.body.username;
    const personalityType = req.body.personalityType;
    const profilePicture = req.body.profilePicture;
    const password = bcrypt.hash(req.body.password, 10);
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