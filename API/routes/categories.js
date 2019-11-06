const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// Get all categories 
router.get('/', async (req, res) => {
    try {
        // Try to find all categories in DB
        const categories = await Category.find();

        // Send back categories in json if successful
        res.status(200).json(categories);
    }

    catch (err) {
        // Internal server error, categories not found
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    let category = new Category({
        name: req.body.name
    });

    try {
        const newCategory = await category.save();
        // Status 201 - Succesful creating something...
        res.status(201).json(newCategory);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;