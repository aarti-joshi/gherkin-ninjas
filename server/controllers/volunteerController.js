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

async function create(req, res) {
  try {
    const data = req.body;
    const newVolunteer = await Volunteer.create(data);
    res.status(201).send(newVolunteer);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
}

async function update(req, res) {
  try {
    let id = parseInt(req.params.volunteer_id);
    const existingVolunteer = await Volunteer.getByVolunteerId(id);

    const dataToUpdate = {
      ...existingVolunteer,
      ...req.body,
    };
    const volunteer = new Volunteer(dataToUpdate);
    const updatedVolunteer = await volunteer.update();

    res.json(updatedVolunteer);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
}

async function destroy(req, res) {
  try {
    let id = parseInt(req.params.volunteer_id);
    const volunteer = await Volunteer.getByVolunteerId(id);
    await volunteer.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
}

module.exports = { index, show, create, update, destroy };
