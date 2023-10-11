const db = require("../database/connect");

class History {
  constructor(history) {
    this.history_id = history.history_id;
    this.event_id = history.event_id;
  }
  static async getAll() {
    const response = await db.query("SELECT * FROM History;");
    return response.rows.map((H) => new History(H));
  }

  static async getByHistoryId(history_id) {
    const response = await db.query(
      "SELECT * FROM History WHERE history_id = $1",
      [history_id]
    );

    if (response.rows.length != 1) {
      throw new Error("History not found");
    }
    return new History(response.rows[0]);
  }

  static async create(data) {
    const { event_id } = data;
    const response = await db.query(
      "INSERT INTO History (event_id) VALUES ($1) RETURNING *;",
      [event_id]
    );
    const newHistoryId = response.rows[0].history_id;
    const newHistory = await History.getByHistoryId(newHistoryId);
    return newHistory;
  }

  async update(data) {
    const { event_id } = data;
    const response = await db.query(
      "UPDATE History SET event_id = $1 WHERE history_id = $2 RETURNING *;",
      [event_id, this.history_id]
    );
    return new History(response.rows[0]);
  }

  async destroy() {
    await db.query("DELETE FROM History WHERE history_id = $1;", [
      this.history_id,
    ]);
  }
}

module.exports = History;
