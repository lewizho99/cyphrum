const express = require('express');
const appRouter = express.Router();

const clientRouter = require('./client');
const serverRouter = require('./server');

appRouter.use('/clients', clientRouter);
appRouter.use('/servers', serverRouter);

module.exports = appRouter;