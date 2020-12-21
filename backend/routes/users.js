const router = require('express').Router();
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
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
        try{
            const {username, password} = req.body;

            let user = await User.findOne({
                username
            });
            
            //validates if username exists
            if(!user){
                return res.status(400).json({
                    type: "NONEXISTENT"
                });
            }
            
            //checks password matches
            const isMatch = await bcrypt.compareSync(password, user.password);
            if (!isMatch){
                return res.status(400).json({
                    type: "INCORRECT_PASSWORD"
                });
            }

            res.status(200).json({
                id: user.id
            });
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
router.route('/add').post(
    async (req, res) => {
        try{

    //validate
    let user = await User.findOne({
        username: req.body.username
    });

    if(user){
        return res.status(400).json({
            type: "TAKEN"
        });
    }

    //User Fields
    const username = req.body.username;
    const password = await bcrypt.hashSync(req.body.password, 10);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const personalityType = req.body.personalityType;
    const profilePicture = req.body.profilePicture;
    const biography = req.body.biography;
    const friends = [];
    const snapchat = req.body.snapchat;
    const instagram = req.body.instagram;
    const facebook = req.body.facebook;
    const discord = req.body.discord;

    const newUser = new User({username, firstName, lastName, email, personalityType, profilePicture, password, biography, 
        friends, snapchat, instagram, facebook, discord});

     newUser.save()
        .then(async () => res.status(200).json({
            userId: await newUser.id,
            personalityType: await newUser.personalityType
        }))
        .catch(err => res.status(400).json('Error: ' + err))

        }
        catch(e){
            console.log(e)
        }

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
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.personalityType = req.body.personalityType;
        user.profilePicture = req.body.profilePicture;
        user.password = req.body.password;
        user.biography = req.body.biography;
        user.friends = req.body.friends;
        user.snapchat = req.body.username;
        user.instagram = req.body.instagram;
        user.facebook = req.body.username;
        user.discord = req.body.discord;

        user.save()
            .then(() => res.json('User updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
   }) 
   .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;