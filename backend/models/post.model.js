const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//the actual schema consisting of database fields
const postSchema = new Schema({
    caption: { type: String, required: true },
    likes: [{ type: String }],
    username: { type: String, required: true },
    imageURL: String,
    date: { type: Date, default: Date.now }
}, {
    timestamps: true
}
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;