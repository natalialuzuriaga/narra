const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    personalityType: [{
        type: String,
        required: true
    }],
    profilePicture: { 
        type: String, 
        required: false
    },
    username: { 
        type: String, 
        required: true,
        trim: true,
        minlength: 5,
    },
    password: { 
        type: String, 
        required: true
    },
    biography: { 
        type: String, 
        required: true
    },
    friends: [{ 
        type: String, 
        required: false
    }],
    snapchat: { 
        type: String, 
        required: false
    },
    instagram: { 
        type: String, 
        required: false
    },
    twitter: { 
        type: String, 
        required: false
    },
    facebook: { 
        type: String, 
        required: false
    },
    discord: { 
        type: String, 
        required: false
    },
}, {
    timestaps: true,
    }
);

//Test Object
// const userSchema = new Schema ({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true, 
//         minLength: 3
//     },
// }, {
//     timestamps: true,
// }
// );


const User = mongoose.model('User', userSchema)

module.exports = User