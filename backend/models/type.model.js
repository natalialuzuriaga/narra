const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const typeSchema = new Schema({
    type_name: { 
        type: String, 
        required: true,
    },
    users: [{ 
        type: String, 
        required: false
    }],
}, {
    timestamps: true,
    }
);

const Type = mongoose.model('Type', typeSchema)

module.exports = Type