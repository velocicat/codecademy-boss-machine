const express = require('express');
const apiRouter = express.Router();
const db = require('./db');

const minionsRouter = require('./minions');

apiRouter.use('/minions', minionsRouter);
// Minion Routes
// apiRouter.param('minionId', (req, res, next, id) => {
//     if (Number.parseInt(id)) {
//         if (db.getFromDatabaseById('minions', id)) {
//             req.minionId = id;
//             next();
//         } else {
//             res.status(404).send();
//         }
//     } else {
//         res.status(404).send();
//     }  
// });

// apiRouter.get('/minions', (req, res, next) => {
//     const minions = db.getAllFromDatabase('minions');
//     res.send(minions);
// });

// apiRouter.get('/minions/:minionId', (req, res, next) => {
//     const minion = db.getFromDatabaseById('minions', req.minionId);
//     res.send(minion);
// });

// apiRouter.post('/minions', (req, res, next) => {
//     const minion = db.addToDatabase('minions', req.body);
//     res.status(201).send(minion);
// });

// apiRouter.put('/minions/:minionId', (req, res, next) => {
//     const minion = db.updateInstanceInDatabase('minions', req.body);
//     res.status(200).send(minion);
// });

// apiRouter.delete('/minions/:minionId', (req, res, next) => {
//     db.deleteFromDatabasebyId('minions', req.minionId);
//     res.status(204).send();
// });

module.exports = apiRouter;
