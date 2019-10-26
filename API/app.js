const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

// Use middleware json
app.use(express.json());

// Allow requests from any origins
app.use(cors());

// DB setup
// mongoose.connect('mongodb://localhost/FireNews', { useNewUrlParser: true });
mongoose.connect('mongodb+srv://mikael:admin@firenews-xopnn.gcp.mongodb.net/FireNews?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true}
)
;
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