const app = require('../app.js');
const req = require('supertest');
// const req = supertest(app);

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

describe('Article API test', () => {
    it('new article with POST', async done => { 
        req(app).post('/article')
        .send(testData)
        .set('Accept', 'application/json')
        .expect(201);
        
        done();
    });

    it('get all articles with GET', async done => { 
        req(app).get('/article')
        .set('Accept', 'application/json')
        .expect(200);
        
        done();
    });
});

describe('Category API test', () => {
    it('new article with POST', async done => { 
        req(app).post('/categories')
        .set('Accept', 'application/json')
        .expect(200);
        
        done();
    });
});

