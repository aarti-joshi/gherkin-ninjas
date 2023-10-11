const db = require("../database/connect");

class Event {
  constructor(event) {
    this.event_id = event.event_id;
    this.event_date = event.event_date;
    this.event_name = event.event_name;
    this.description = event.description;
    this.category = event.category;
    this.point = event.point;
  }

  // LIST ALL EVENTS:
  static async getAll() {
    const response = await db.query("SELECT * FROM Event;");

    if (response.rows.length === 0) {
      throw new Error("No events available");
    }

    return response.rows.map((E) => new Event(E));
  }

  //GET AN EVENT BY ITS ID:
  static async getByEventId(event_id) {
    const response = await db.query("SELECT * FROM Event WHERE event_id = $1", [
      event_id,
    ]);

    if (response.rows.length != 1) {
      throw new Error("Event not found");
    }
    return new Event(response.rows[0]);
  }

  // CREATE A NEW EVENT - ADMIN USERS ONLY:
  static async create(data) {
    const { event_name, event_date, description, category, point } = data;
    const response = await db.query(
      "INSERT INTO Event (event_name, event_date, description, category, point) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
      [event_name, event_date, description, category, point]
    );
    const newEventId = response.rows[0].event_id;
    const newEvent = await Event.getByEventId(newEventId);
    return newEvent;
  }

  // UPDATE AN EVENT
  async update() {
    const response = await db.query(
      "UPDATE Event SET event_name = $1, event_date = $2, description = $3, category = $4, point = $5 WHERE event_id = $6 RETURNING *;",
      [
        this.event_name,
        this.event_date,
        this.description,
        this.category,
        this.point,
        this.event_id,
      ]
    );
    return new Event(response.rows[0]);
  }

  // DELETE AN EVENT
  async destroy() {
    const response = await db.query(
      "DELETE FROM Event WHERE event_id = $1 RETURNING *;",
      [this.event_id]
    );
    return new Event(response.rows[0]);
  }
}

module.exports = Event;
