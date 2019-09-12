const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// Get all categories 
router.get('/', async (req, res) => {
    try {
        // Try to find all categories in DB
        const categories = await Category.find();

        // Send back categories in json if successful
        res.json(categories);
    }

    catch (err) {
        // Internal server error, categories not found
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;