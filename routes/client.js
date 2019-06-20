const express = require('express');
const clientRouter = express.Router();

clientRouter.get('/', (req, res) => {
    console.log('Get clients');
});

module.exports = clientRouter;