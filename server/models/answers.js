const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
    author: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    upRating: {
        type: Array,
        required: true,
        default: [],
    },
    downRating: {
        type: Array,
        required: true,
        default: [],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    text: {
        type: String,
        required: true,
        min: 3,
    },
});

module.exports = mongoose.model('Answer', answerSchema);
