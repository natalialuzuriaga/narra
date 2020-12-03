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

//getting a post based on id
router.route('/:id').get((req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json('Error: ' + err));
});

//deleting a post based on id
router.route('/:id').delete((req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.json('Post was deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
})

//updating a particular post
router.route('/update/:id').post((req,res) => {
    Post.findById(req.params.id)
    .then(post => {
        post.caption = req.body.caption;
        post.likes = req.body.likes;
        post.username = req.body.username;
        post.imageURL = req.body.imageURL;
        post.date = Date.parse(req.body.date);

        post.save()
        .then(() => res.json('Post successfully updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;