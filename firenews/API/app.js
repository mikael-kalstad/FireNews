const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Use middleware json
app.use(express.json());

// DB setup
mongoose.connect('mongodb://localhost/FireNews', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Conntected to database'));

// ROUTER SETUP
const articlesRouter = require('./routes/articles');
app.use('/articles', articlesRouter);

const categoriesRouter = require('./routes/categories');
app.use('/categories', categoriesRouter);

// Start server
const PORT = process.env.port || 4000;
app.listen(PORT, console.log('Server up and running, listening on port ' + PORT));