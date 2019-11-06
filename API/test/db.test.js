const mongoose = require('mongoose');
const Article = require('../models/article');
const testData = { 
    "category": "Sport",
    "author": "Mikael Kalstad",
    "title": "This is the article!",
    "content": "Test content",
    "summary": "Test summary",
    "img": "https://image.com",
    "imgDescription": "Image description",
    "frontPage": true
}

const testData2 = { 
    "dog": "Voof",
    "category": "Sport",
    "author": "Mikael Kalstad",
    "title": "This is the article!",
    "content": "Test content",
    "summary": "Test summary",
    "img": "https://image.com",
    "imgDescription": "Image description",
    "frontPage": true
}

const testData3 = { 
    "author": "Mikael Kalstad",
    "title": "This is the article!",
    "content": "Test content",
    "summary": "Test summary",
    "img": "https://image.com",
    "imgDescription": "Image description",
    "frontPage": true
}

let id = null;

describe('User Model Test', () => {

    // Conntect to MongoDB server using mongoose
    beforeAll(async () => {
        await mongoose.connect('mongodb+srv://mikael:admin@firenews-xopnn.gcp.mongodb.net/FireNews?retryWrites=true&w=majority',
            { useNewUrlParser: true, useUnifiedTopology: true}, 
            (err) => {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
            }
        );
    });

    it('Create and save new article', async () => {
        // Create new article and save it to the DB
        const article = new Article(testData);
        const newArticle = await article.save();
        
        // If the article was save successfullt to DB, the object id should be defined
        expect(newArticle._id).toBeDefined();
        expect(newArticle.category).toBe(testData.category);
        expect(newArticle.title).toBe(testData.title);
        expect(newArticle.author).toBe(testData.author);
        expect(newArticle.content).toBe(testData.content);
        expect(newArticle.summary).toBe(testData.summary);
        expect(newArticle.img).toBe(testData.img);
        expect(newArticle.imgDescription).toBe(testData.imgDescription);
        expect(newArticle.frontPage).toBe(testData.frontPage);

        // Delete article
        newArticle.remove();
    });

    // You shouldn't be able to add in any field that isn't defined in the schema
    it('the article should be saved, but the field which is not in the schema should not be defined', async () => {
        // Create new article and save it to the DB
        const article = new Article(testData2);
        const newArticle = await article.save();

        expect(newArticle._id).toBeDefined();
        expect(newArticle.dog).toBeUndefined();

        // Delete article
        newArticle.remove();
    });

    // You shouldn't be able to add in any field that isn't defined in the schema
    it('not save the article since a required field (category) is not defined', async () => {
        // Create new article and save it to the DB
        const article = new Article(testData3);
        
        let res;
        try { res = await article.save(); }
        catch (err) { res = err; }

        expect(res).toBeInstanceOf(mongoose.Error.ValidationError);
        // expect(res.errors.gender).toBeDefined();
    });
})