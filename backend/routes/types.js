const router = require('express').Router();
const ENFP = "5fd1c4ce99d8e0880b65105c";
const INFP = "5fd1c53999d8e0880b65105d";
const INFJ = "5fd1c54299d8e0880b65105e";
const ENFJ = "5fd1c54299d8e0880b65105f";
const INTJ = "5fd1c54299d8e0880b651060";
const ENTJ = "5fd1c54299d8e0880b651061";
const INTP = "5fd1c54299d8e0880b651062";
const ENTP = "5fd1c54299d8e0880b651063";
const ISFP = "5fd1c54299d8e0880b651064";
const ESFP = "5fd1c54299d8e0880b651065";
const ISTP = "5fd1c54299d8e0880b651066";
const ESTP = "5fd1c54299d8e0880b651067";
const ISFJ = "5fd1c54299d8e0880b651068";
const ESFJ = "5fd1c54299d8e0880b651069";
const ISTJ = "5fd1c54299d8e0880b65106a";
const ESTJ = "5fd1c54299d8e0880b65106b";
let Type = require('../models/type.model');

//Gets All Types
router.route('/').get((req, res) => {
    Type.find()
        .then(types => res.json(types))
        .catch(err => res.status(400).json('Error: ' + err))
});

//Add Type
router.route('/add').post((req, res) => {
    const type_name = req.body.type_name;
    const users = req.body.users;

    const newType = new Type({type_name, users});
    newType.save()
        .then(() => res.json('Type added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

//Get Type using object ID
router.route('/:id').get((req, res) => {
        Type.findById(req.params.id)
            .then(type => res.json(type))
            .catch(err => res.status(400).json('Error: '+err));

});

//Update type
router.route('/update/').post((req, res) =>{
    console.log(req.body.personalityType)
    console.log(req.body.id)
    var userType = "";
    switch(req.body.personalityType){
        case "ENFP":
            userType = ENFP;
            break;
        case "INFP":
            userType = INFP;
            break;
        case "INFJ":
            userType = INFJ;
            break;
        case "ENFJ":
            userType = ENFJ;
            break;
        case "INTJ":
            userType = INTJ;
            break;
        case "ENTJ":
            userType = ENTJ;
            break;
        case "INTP":
            userType = INTP;
            break;
        case "ENTP":
            userType = ENTP;
            break;
        case "ISFP":
            userType = ISFP;
            break;
        case "ESFP":
            userType = ESFP;
            break;
        case "ISTP":
            userType = ISTP;
            break;
        case "ESTP":
            userType = ESTP;
            break;
        case "ISFJ":
            userType = ISFJ;
            break;
        case "ESFJ":
            userType = ESFJ;
            break;
        case "ISTJ":
            userType = ISTJ;
            break;
        case "ESTJ":
            userType = ESTJ;
            break;
    }

    console.log(userType);

    Type.findById(userType)
   .then(type => {
       //type.type_name = req.body.personalityType;
       type.users.push(req.body.id);

        type.save()
            .then(() => res.json('Type updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
   }) 
   .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;