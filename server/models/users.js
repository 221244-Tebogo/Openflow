const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    profileimage: {
        type: String,
        required: true,
        default: 'https://static.thenounproject.com/png/638636-200.png',
        max: 1024,
    },
    surname: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    password: {
        type: String, 
        required: true,
        min: 6,
        max: 1024,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    superuser: {
        type: Boolean,
        required: true,
        default: false,
    },
    karma: {
        type: Number,
        required: true,
        default: 0,
    },
    tags: {
        type: Array,
        required: true,
        default: [],
    }
});

module.exports = mongoose.model('User', userSchema);
