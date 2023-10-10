const request = require("supertest");
const app = require("../app"); // Adjust the path based on your project structure
const db = require("../database/connect"); // Import your database connection module

// Import your Event model for creating and retrieving data
const Event = require("../models/Community");

// Create a describe block for your communityRouter tests
describe("Community Router Tests", () => {
  // This will hold the ID of the event created for testing
  let testEventId;

  // Before running the tests, create an event for testing purposes
  beforeAll(async () => {
    // Create an event in the database and store its ID for testing
    const eventData = {
      event_date: "2023-12-31",
      event_name: "Test Event",
      description: "This is a test event.",
      category: "Test Category",
      point: 50,
    };

    const newEvent = await Event.create(eventData);
    testEventId = newEvent.event_id;
  });

  // After running the tests, clean up the test event from the database
  afterAll(async () => {
    // Delete the test event from the database
    await Event.getByEventId(testEventId).destroy();
  });

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
