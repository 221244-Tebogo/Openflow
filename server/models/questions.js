const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    description: {
        type: String,
        required: true,
        min: 3,
    },
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
    tags: {
        type: Array,
        required: true,
        default: [],
    },
    answers: {
        type: Array,
        required: true,
        default: [],
    },
    UploadImg: {
        type: String
    },
    comments: {
        type: Array,
        required: true,
        default: [
            {
                // Comment layout:
                // ========================================
                // author: {
                //     type: String,
                //     required: true,
                //     min: 3,
                //     max: 255,
                //     default: 'Anonymous',
                // },
                // text: {
                //     type: String,
                //     required: true,
                //     min: 3,
                //     default: 'No text provided',
                // },
                // date: {
                //     type: Date,
                //     default: Date.now,
                // },
                // upRating: {
                //     type: Array,
                //     required: true,
                //     default: [],
                // },
                // downRating: {
                //     type: Array,
                //     required: true,
                //     default: [],
                // }
                // ========================================
            }
        ],
    },
    solved: {
        type: Boolean,
        required: true,
        default: false,
    },
    image: {
        type: String,
        required: false,
    }


});

module.exports = mongoose.model('Question', questionSchema);
