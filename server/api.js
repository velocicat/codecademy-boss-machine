const express = require('express');
const apiRouter = express.Router();
const db = require('./db');

const minionsRouter = require('./minions');

apiRouter.use('/minions', minionsRouter);

module.exports = apiRouter;
