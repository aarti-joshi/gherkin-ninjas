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
  };

  //GET AN EVENT BY ITS NAME:
  static async getByEventId(event_id) {
    const response = await db.query( "SELECT * FROM Event WHERE event_id = $1", [event_id]);

    if (response.rows.length != 1) {
      throw new Error("Unable to find event");
    }
    return new Event(response.rows[0]);
  }

//   // CREATE A NEW EVENT - ADMIN USERS ONLY:
//   static async create(data) {
//     const { event_name, event_date, description, category, point } = data;
//     const response = await db.query(
//       "INSERT INTO Event (event_name, event_date, description, category, point) VALUES ($1, $2, $3, $4) RETURNING *;",
//       [event_name, event_date, description, category, point]
//     );
//     console.log(response.rows[0]);
//     return new Event(response.rows[0]);
//   }
}

module.exports = Event;
