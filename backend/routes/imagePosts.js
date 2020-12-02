//to create the route we need to get the express router 
const router = require('express').Router();
let ImagePost = require('../models/imagePost.model');

//the get request
router.route('/').get((req, res) => {
    ImagePost.find()
    .then(imagePosts => res.json(imagePosts))
    .catch(err => res.status(400).json('Error: ' + err));
});

//the post request
router.route('/add').post((req, res) => {
    const caption = req.body.caption;
    const likes = Number(req.body.likes);
    const username = req.body.username;
    const imageURL = req.body.imageURL;
    const date = Date.parse(req.body.date);

    const newImagePost = new ImagePost({
        caption,
        likes,
        username,
        imageURL,
        date
    });

    newImagePost.save()
    .then(() => res.json('Posted successfully!'))
    .catch(err => res.statys(400).json('Error: ' + err));
})

module.exports = router;