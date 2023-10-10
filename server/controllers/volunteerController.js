const Volunteer = require("../models/volunteerModel");

async function index(req, res) {
  try {
    const volunteers = await Volunteer.getAll();
    res.json(volunteers);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

async function show(req, res) {
  try {
    const id = parseInt(req.params.volunteer_id);
    const volunteer = await Volunteer.getByVolunteerId(id);
    res.json(volunteer);
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
}

module.exports = { index, show };
