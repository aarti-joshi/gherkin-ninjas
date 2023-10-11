const History = require("../models/historyModel");

async function index(req, res) {
  try {
    const historyRecords = await History.getAll();
    res.json(historyRecords);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

async function show(req, res) {
  try {
    const id = parseInt(req.params.history_id);
    const historyRecord = await History.getByHistoryId(id);
    res.json(historyRecord);
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const data = req.body;
    const newHistoryRecord = await History.create(data);
    res.status(201).send(newHistoryRecord);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
}

async function update(req, res) {
  try {
    const id = parseInt(req.params.history_id);
    const data = req.body;
    const history = await History.getByHistoryId(id);
    const updatedHistory = await history.update(data);
    res.json(updatedHistory);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
}

async function destroy(req, res) {
  try {
    const id = parseInt(req.params.history_id);
    const history = await History.getByHistoryId(id);
    await history.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
}

module.exports = { index, show, create, update, destroy };
