const router = require('express').Router();
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
router.route('/update/:id').post((req, res) =>{
    Type.findById(req.params.id)
   .then(type => {
       type.type_name = req.body.type_name;
       type.users = req.body.users;

        type.save()
            .then(() => res.json('Type updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
   }) 
   .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;