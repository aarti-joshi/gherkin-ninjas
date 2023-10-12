require("dotenv").config({ path: ".env.test" });

const request = require("supertest");
const app = require("../server/app"); // Update this path to match your project structure
const db = require("../server/database/connect"); // Update this path to match your project structure
const testPort = 3001; // You can use a different port if needed

describe("GET /Volunteer/:volunteer_id", () => {
  it("Should respond with a 404 error if the volunteer does not exist", async () => {
    const nonExistentVolunteerId = 9999; // An ID that doesn't exist
    const response = await request(app).get(
      `/Volunteer/${nonExistentVolunteerId}`
    );
    expect(response.status).toBe(404);
  });
});

afterAll(async () => {
  await db.end(); // Close the database connection pool after all tests
});
