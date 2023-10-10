const db = require("../database/connect");

class Volunteer {
  constructor(volunteer) {
    this.volunteer_id = volunteer.volunteer_id;
    this.firstname = volunteer.firstname;
    this.surname = volunteer.surname;
    this.history_id = volunteer.history_id;
    this.email_address = volunteer.email_address;
    this.contact_number = volunteer.contact_number;
    this.address = volunteer.address;
    this.postcode = volunteer.postcode;
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

  static async create(data) {
    const {
      firstname,
      surname,
      history_id,
      email_address,
      contact_number,
      address,
      postcode,
    } = data;
    const response = await db.query(
      "INSERT INTO Volunteer (firstname, surname, history_id, email_address, contact_number, address, postcode) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;",
      [
        firstname,
        surname,
        history_id,
        email_address,
        contact_number,
        address,
        postcode,
      ]
    );

    const newVolunteerId = response.rows[0].volunteer_id;
    const newVolunteer = await Volunteer.getByVolunteerId(newVolunteerId);
  }

  async update() {
    const response = await db.query(
      "UPDATE Volunteer SET firstname = $1, surname = $2, history_id = $3, email_address = $4, contact_number = $5, address = $6, postcode = $7 WHERE volunteer_id = $8 RETURNING *;",
      [
        this.firstname,
        this.surname,
        this.history_id,
        this.email_address,
        this.contact_number,
        this.address,
        this.postcode,
        this.volunteer_id,
      ]
    );
    return new Volunteer(response.rows[0]);
  }
  async destroy() {
    await db.query("DELETE FROM Volunteer WHERE volunteer_id = $1;", [
      this.volunteer_id,
    ]);
    // return new Volunteer(response.rows[0]);
  }
}
module.exports = Volunteer;
