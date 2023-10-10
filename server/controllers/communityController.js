const Event = require('../models/Community');

async function index(req, res) {
    try {
        const events = await Event.getAll();
        res.status(200).send(events);
    }
    catch (err) {
        res.status(500).send({error: err.message})
    }
};

async function show(req, res) {
    try {
        let name = req.params.name;
        const event = await Event.getByEventName(name);
        res.status(200).send(event);
    } 
    catch (err) {
    res.status(500).send({error: err.message})
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