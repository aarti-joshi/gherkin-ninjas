require("dotenv").config({ path: ".env.test" });

const request = require("supertest");
const app = require("../server/app", "../server/index");
const db = require("../server/database/connect");
const testPort = 3001;

describe("GET /", () => {
  it('responds with "this is a resident\'s API"', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("this is a resident's API");
  });
});

describe("GET /CommunityAsync", () => {
  it("Responds with the list of events from the database", async () => {
    const response = await request(app).get("/CommunityAsync");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/application\/json/);
  });
});

describe("GET /CommunityAsync/:id", () => {
  it("Respond with the JSON data of the specified ID", async () => {
    const testId = 6;

    const response = await request(app).get(`/CommunityAsync/${testId}`);

    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/application\/json/);

    const jsonData = JSON.parse(response.text);

    expect(jsonData.event_id).toEqual(testId);
  });
});

describe("POST /CommunityAsync", () => {
  it("Creates a new event", async () => {
    const newEvent = {
      event_name: "New Event",
      event_date: "2023-10-11",
      description: "A test event",
      category: "Test Category",
      point: 5,
    };

    const response = await request(app).post("/CommunityAsync").send(newEvent);

    expect(response.status).toEqual(201);
    expect(response.headers["content-type"]).toMatch(/application\/json/);
    expect(response.body).toHaveProperty("event_id");
    expect(response.body.event_name).toEqual(newEvent.event_name);
  });
});

describe("PATCH /CommunityAsync/:id", () => {
  it("Updates an existing event", async () => {
    const testId = 2; //
    const updatedEvent = {
      event_name: "Updated Event",
    };

    const response = await request(app)
      .patch(`/CommunityAsync/${testId}`)
      .send(updatedEvent);

    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/application\/json/);
    expect(response.body).toHaveProperty("event_id", testId);
    expect(response.body.event_name).toEqual(updatedEvent.event_name);
  });
});

describe("DELETE /CommunityAsync/:id", () => {
  it("Deletes an existing event", async () => {
    const testId = 3; //

    const response = await request(app).delete(`/CommunityAsync/${testId}`);

    expect(response.status).toEqual(204);
  });
});

afterAll(async () => {
  await db.end(); // Close the database connection pool after all tests
});

describe("Server Listening", () => {
  let server;

  beforeAll((done) => {
    server = app.listen(testPort, () => {
      console.log("Server is live on port 3000.");
      done();
    });
  });

  afterAll((done) => {
    if (server) {
      server.close((err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Server closed successfully.");
        }
        done();
      });
    } else {
      console.log("Server was not started, so no need to close.");
      done();
    }
  });

  it("Should respond with 200 OK when the server is running", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});
