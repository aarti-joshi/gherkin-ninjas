const db = require('../db/connect');

class Event {
    constructor(event) {
        this.event_id = Event.event_id
        this.name = event.name
        this.description = event.description
        this.category = event.category
        this.point = event.point
    }

    // LIST ALL EVENTS:
    static async getAll() {
        const response = await db.query("SELECT * FROM Event;");

        if (response.rows.length === 0) {
            throw new Error("No events available");
        }

        return response.rows.map(c => new Event(E));
    }

    // GET AN EVENT BY ITS NAME:
    static async getByEventName(name) {
        const response = await db.query("SELECT * FROM Event WHERE LOWER(name) = LOWER($1)", [name]);

        if (response.rows.length === 0 || response.rows.length != 1) {
            throw new Error("Unable to find event");
        }
        return new Event(response.rows[0]);
    }

    // CREATE A NEW EVENT - ADMIN USERS ONLY:
    static async create(data) {
        const { name, description, category, point } = data;
        const response = await db.query("INSERT INTO Event (name, description, category, point) VALUES ($1, $2, $3, $4) RETURNING *;", [name, description, category, point]);
        console.log(response.rows[0]);
        return new Event(response.rows[0]);
    }

}

module.exports = Event