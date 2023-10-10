const db = require("../database/connect");

class Volunteer {
  constructor(Volunteer) {
    this.volunteer_id = Volunteer.volunteer_id;
    this.firstname = Volunteer.firstname;
    this.surname = Volunteer.surname;
    this.history_id = Volunteer.history_id;
    this.email_address = Volunteer.email_address;
    this.contact_number = Volunteer.contact_number;
    this.address = Volunteer.address;
    this.postcode = Volunteer.postcode;
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM Volunteer;");
    return response.rows.map((V) => new Volunteer(V));
  }

  static async getByVolunteerId(volunteer_id) {
    const response = await db.query(
      "SELECT * FROM Volunteer WHERE volunteer_id = $1",
      [volunteer_id]
    );

    if (response.rows.length != 1) {
      throw new Error("Volunteer not found");
    }
    return new Volunteer(response.rows[0]);
  }
}

module.exports = Volunteer;
