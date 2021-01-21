const express = require('express');
const db = require('./db');

const meetingsRouter = express.Router();

meetingsRouter.get('/', (req, res, next) => {
    const meetings = db.getAllFromDatabase('meetings');
    res.send(meetings);
});

meetingsRouter.post('/', (req, res, next) => {
    const meeting = db.addToDatabase('meetings', db.createMeeting());
    res.status(201).send(meeting);
});

meetingsRouter.delete('/', (req, res, next) => {
    db.deleteAllFromDatabase('meetings');
    res.status(204).send();
});

module.exports = meetingsRouter;