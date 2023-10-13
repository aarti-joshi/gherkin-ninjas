const bcrypt = require("bcrypt");

const Token = require("../models/token");
const Volunteer = require("../models/volunteerModel");

async function register (req, res) {
  try {
      const data = req.body;

      // Generate a salt with a specific cost
      const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));

      // Hash the password
      data["password"] = await bcrypt.hash(data["password"], salt);

      const result = await Volunteer.create(data);

      res.status(201).send(result);
  } catch (err) {
      res.status(400).json({"error": err.message})
  }
};

//login using get by email
async function login(req, res) {
  try {
      const data = req.body;

      const volunteer = await Volunteer.getByEmail(data.email_address);
      const authneticated = await bcrypt.compare(data.password, volunteer["password"]);
      if(!authneticated) {
          throw new Error("Password is incorrect");
      }else {
          const token = await Token.create(volunteer.volunteer_id);
          res.status(200).json({authneticated: true, token: token});
      }
  } catch (err) {
      res.status(403).json({ "error": err.message });
  }
};

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

module.exports = { index, show, create, update, destroy, register, login };
