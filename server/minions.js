const express = require('express');
const db = require('./db.js');

const minionsRouter = express.Router();

// Minion Routes
minionsRouter.param('minionId', (req, res, next, id) => {
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

minionsRouter.get('/', (req, res, next) => {
    const minions = db.getAllFromDatabase('minions');
    res.send(minions);
});

minionsRouter.get('/:minionId', (req, res, next) => {
    const minion = db.getFromDatabaseById('minions', req.minionId);
    res.send(minion);
});

minionsRouter.post('/', (req, res, next) => {
    const minion = db.addToDatabase('minions', req.body);
    res.status(201).send(minion);
});

minionsRouter.put('/:minionId', (req, res, next) => {
    const minion = db.updateInstanceInDatabase('minions', req.body);
    res.status(200).send(minion);
});

minionsRouter.delete('/:minionId', (req, res, next) => {
    db.deleteFromDatabasebyId('minions', req.minionId);
    res.status(204).send();
});

module.exports = minionsRouter;