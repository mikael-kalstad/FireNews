const app = require('./app.js')

// Start server
const PORT = process.env.port || 4000;
app.listen(PORT, console.log('Server up and running, listening on port ' + PORT));