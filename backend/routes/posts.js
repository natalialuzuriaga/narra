//to create the route we need to get the express router 
const router = require('express').Router();
let Post = require('../models/post.model');

//the get request
router.route('/').get((req, res) => {
    Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

//the post request
router.route('/add').post((req, res) => {
    const caption = req.body.caption;
    const likes = req.body.likes;
    const username = req.body.username;
    const imageURL = req.body.imageURL;
    const date = Date.parse(req.body.date);

    const newPost = new Post({
        caption,
        likes,
        username,
        imageURL,
        date
    });

    newPost.save()
    .then(() => res.json('Posted successfully!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;