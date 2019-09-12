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
        type: String,
        default: 'no img'
    },
    frontPage: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Article', articleSchema);

