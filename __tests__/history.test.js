require("dotenv").config({ path: ".env.test" });

const request = require("supertest");
const app = require("../server/app", "../server/index");
const db = require("../server/database/connect");
const testPort = 3001;

describe("GET /History", () => {
  it("Responds with the list of history records from the database", async () => {
    const response = await request(app).get("/History");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/application\/json/);
  });
});

describe("GET /History/:history_id", () => {
  it("Respond with the JSON data of the specified history record", async () => {
    const testId = 1;

    const response = await request(app).get(`/History/${testId}`);

    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/application\/json/);
  });

  it("Should respond with a 404 error if the history record does not exist", async () => {
    const nonExistentHistoryId = 9999; // An ID that doesn't exist
    const response = await request(app).get(`/History/${nonExistentHistoryId}`);
    expect(response.status).toBe(404);
  });
});

describe("POST /History", () => {
  it("Creates a new history record", async () => {
    const newHistoryRecord = {
      event_id: 1,
    };

    const response = await request(app).post("/History").send(newHistoryRecord);

    expect(response.status).toEqual(201);
    expect(response.headers["content-type"]).toMatch(/application\/json/);
    expect(response.body).toHaveProperty("history_id");
  });
});

describe("PATCH /History/:history_id", () => {
  it("Updates an existing history record", async () => {
    const testId = 1; // Replace with a valid history ID
    const updatedHistoryRecord = {
      event_id: 2,
    };

    const response = await request(app)
      .patch(`/History/${testId}`)
      .send(updatedHistoryRecord);

    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/application\/json/);
    expect(response.body).toHaveProperty("history_id", testId);
  });
});

describe("DELETE /History/:history_id", () => {
  it("Deletes an existing history record", async () => {
    const testId = 1; // Replace with a valid history ID

    const response = await request(app).delete(`/History/${testId}`);

    expect(response.status).toEqual(204);
  });
});

afterAll(async () => {
  await db.end(); // Close the database connection pool after all tests
});
