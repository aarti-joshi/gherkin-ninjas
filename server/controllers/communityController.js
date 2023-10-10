const Event = require('../models/Community');

async function index(req, res) {
    try {
        const events = await Event.getAll();
        res.json(events);
    }
    catch (err) {
        res.status(500).send({error: err.message})
    }
};

async function show(req, res) {
    try {
        const id = parseInt(req.params.event_id);
        const event = await Event.getByEventId(id);
        res.json(event);
    } 
    catch (err) {
    res.status(404).send({error: err.message})
    }
};

async function create(req, res) {
    const data = req.body;
    try {
        const newEvent = await Event.create(data);
        res.status(201).send(newEvent);
    } 
    catch (err) {
        res.status(400).send({error: err.message})
    }
};


module.exports = { index, show, create }