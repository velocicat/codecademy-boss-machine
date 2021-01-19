const express = require('express');
const apiRouter = express.Router();
const db = require('./db');

apiRouter.param('minionId', (req, res, next, id) => {
    if (Number.parseInt(id)) {
        if (db.getFromDatabaseById('minions', id)) {
            req.minionId = id;
            next();
        } else {
            res.status(404).send();
        }
    } else {
        res.status(404).send();
    }  
});

apiRouter.get('/minions', (req, res, next) => {
    const minions = db.getAllFromDatabase('minions');
    res.send(minions);
});

apiRouter.get('/minions/:minionId', (req, res, next) => {
    const minion = db.getFromDatabaseById('minions', req.minionId);
    res.send(minion);
});

module.exports = apiRouter;
