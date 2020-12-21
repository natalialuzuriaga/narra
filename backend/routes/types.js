const router = require('express').Router();
let Type = require('../models/type.model');

// //Gets all Types
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

//Get Object ID using Personality Type
router.route('/find/:personalityType').get(async (req, res) => {
    await Type.findOne({type_name: req.params.personalityType})
        .then(typeObj => {
            res.status(200).json({
                id: typeObj.id
            })
        })
        .catch(err => res.status(400).json('Error: '+err));
});

//Update type
router.route('/update/:id').post(async (req, res) =>{
    console.log(req.body.userId)

    await Type.findById(req.params.id)
   .then(type => {
       type.users.push(req.body.userId);

        type.save()
            .then(() => res.json('Type updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
   }) 
   .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;