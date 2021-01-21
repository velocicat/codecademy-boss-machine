const express = require('express');
const db = require('./db');

const ideasRouter = express.Router();

ideasRouter.param('ideaId', (req, res, next, id) => {
    if (Number.parseInt(id)) {
        if (db.getFromDatabaseById('ideas', id)) {
            req.ideaId = id;
            next();
        } else {
            res.status(404).send();
        }
    } else {
        res.status(404).send();
    }  
});

ideasRouter.get('/', (req, res, next) => {
    const ideas = db.getAllFromDatabase('ideas');
    res.send(ideas);
});

ideasRouter.get('/:ideaId', (req, res, next) => {
    const idea = db.getFromDatabaseById('ideas', req.ideaId);
    res.send(idea);
});

ideasRouter.post('/', (req, res, next) => {
    const idea = db.addToDatabase('ideas', req.body);
    res.status(201).send(idea);
});

ideasRouter.put('/:ideaId', (req, res, next) => {
    const idea = db.updateInstanceInDatabase('ideas', req.body);
    res.status(200).send(idea);
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
    db.deleteFromDatabasebyId('ideas', req.ideaId);
    res.status(204).send();
});

module.exports = ideasRouter;