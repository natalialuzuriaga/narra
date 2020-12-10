const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    personalityType: {
        type: String,
        required: true
    },
    profilePicture: { 
        type: String, 
        required: false
    },
    firstName: { 
        type: String, 
        required: true,
    },
    lastName: { 
        type: String, 
        required: true,
    },
    email: { 
        type: String, 
        required: true,
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
    timestamps: true,
    }
);

const User = mongoose.model('User', userSchema)

module.exports = User