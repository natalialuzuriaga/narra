//first we need to require mongoose to use it
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//the actual schema consisting of database fields
const imagePostSchema = new Schema({
    caption: String,
    likes: Number,
    username: { type: String, required: true },
    imageURL: { type: String, required: true },
    date: { type: Date, default: Date.now }
}, {
    timestamps: true
}
);

const ImagePost = mongoose.model('ImagePost', imagePostSchema);

module.exports = ImagePost;