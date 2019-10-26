const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    summary: String,
    img: {
        type: String
    },
    imgDescription: {
        type: String
    },
    frontPage: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Article', articleSchema);

