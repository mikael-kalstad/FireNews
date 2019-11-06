const express = require('express');
const router = express.Router();
const Article = require('../models/article');

// Getting all articles
router.get('/', async (req, res) => {
    // db.collection('articles').find().toArray((err, docs) => {
    //     return res.json(docs);
    // });
   try {
       const articles = await Article.find();
       res.status(200).json(articles);
   }

   catch (err) {
       // Status 500 - internal server error
       res.status(500).json({message: err.message})
   }
});

// Getting one specific article
router.get('/:id', getArticle, (req, res) => {
    res.send(res.article);
});

// Adding article
router.post('/', async (req, res) => {
    let article = new Article({
        author: req.body.author,
        title: req.body.title,
        content: req.body.content,
        date: Date.now(),
        summary: req.body.summary,
        img: req.body.img || null,
        frontPage: req.body.frontPage,
        category: req.body.category
    });

    try {
        const newArticle = await article.save();
        // Status 201 - Succesful creating something...
        res.status(201).json(newArticle)
    }

    catch (err) {
        // Status 400 - user input error
        res.status(400).json({message: err.message})
    }
});

// Updating an article
// Using patch to avoid all information being overwritten as with put
router.patch('/:id', getArticle, async (req, res) => {
    // Check if field is set in request and change the value in local object
    if (req.body.author != null)  
        res.article.author = req.body.author;

    if (req.body.title != null)
        res.article.title = req.body.title;

    if (req.body.content != null)
        res.article.content = req.body.content;

    if (req.body.summary != null)
        res.article.summary = req.body.summary;

    if (req.body.img != null)
        res.article.img = req.body.img;
    
    if (req.body.imgDescription != null)
        res.article.imgDescription = req.body.imgDescription;

    if (req.body.img != null)
        res.article.category = req.body.category;

    // Try to update the object in DB
    try {
        const updatedArticle = await res.article.save();
        res.status(200).json(updatedArticle);
    }

    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete article
router.delete('/:id', getArticle, async (req, res) => {
    try {
        // Try to remove the article
        await res.article.remove();

        // Article found and deleted
        // Status 200 - successful HTTP request
        res.status(200).json({ message: 'Article deleted' });
    }

    // Article not found or other error
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// -- MIDDLEWARE --
// Find an article with id
async function getArticle(req, res, next) {
    let article;

    try {
        // Find article in DB using id set in req params
        article = await Article.findById(req.params.id);

        // Check if article exists
        if (article == null) 
            // Status 404 - User input error, article not found
            return res.status(404).json({ message: 'Cannot find article' });
    }

    catch (err) {
        return res.status(500).json({ message: err.message });
    }

    // Set article object in res for later use
    res.article = article;

    // Move on to the next middleware / request
    next();
}

module.exports = router;