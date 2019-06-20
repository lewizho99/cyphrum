const express = require('express'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cyphrum', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
dbConnection = mongoose.connection;

dbConnection.once('open', () => {
    console.log('Connected to MongoDB!');
});

dbConnection.on('error', (err) => {
    console.log('Could not connect to DB, Please check if MongoDB is running.');
});

// Setup express app
const app = module.exports = express();

// Setup routes
const routes = require('./routes');

// Setup middlewares
app.use(bodyParser.json());
app.use('/api', routes);

// Set running port
const port = process.env.port || 4000;

// App listening
app.listen(port, () => {
    console.log('Server running on http://localhost:' + port);
    console.log('Waiting for requests...');
});

