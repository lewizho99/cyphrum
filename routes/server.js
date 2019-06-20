const express = require('express');
const serverRouter = express.Router();

serverRouter.get('/', (req, res) => {
    console.log('Get servers');
});

module.exports = serverRouter;