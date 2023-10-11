const request = require("supertest");
const app = require("../server/app");
const db = require("../server/database/connect");

const Event = require("../server/models/Community");

describe("Community Router Tests", () => {
  // This will hold the ID of the event created for testing
  let testEventId;

  // Test the GET /CommunityAsync route
  describe("GET /CommunityAsync", () => {
    it("should respond with a list of events", async () => {
      const response = await request(app).get("/CommunityAsync");
      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(1); // Expecting one event in the response
    });
  });

  // Test the GET /CommunityAsync/:event_id route
  describe("GET /CommunityAsync/:event_id", () => {
    it("should respond with the details of a specific event", async () => {
      const response = await request(app).get(`/CommunityAsync/${testEventId}`);
      expect(response.status).toBe(200);
      expect(response.body.event_id).toBe(testEventId);
    });

    it("should respond with a 404 error if the event does not exist", async () => {
      const nonExistentEventId = 9999; // An ID that doesn't exist
      const response = await request(app).get(
        `/CommunityAsync/${nonExistentEventId}`
      );
      expect(response.status).toBe(404);
    });
  });

  // Add (POST, PATCH, DELETE)
});
