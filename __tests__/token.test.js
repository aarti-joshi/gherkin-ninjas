require("dotenv").config({ path: ".env.test" });

const request = require("supertest");
const app = require("../server/app"); //
const db = require("../server/database/connect"); //
const Token = require("../server/models/token"); //
const testPort = 3001; //

describe("Token Model", () => {
  beforeAll(async () => {
    //environment configurations for testing
  });

  afterAll(async () => {
    // Perform any cleanup or database connection closure
    await db.end();
  });

  describe("Create Token", () => {
    it("Creates a new token for a volunteer", async () => {
      const volunteer_id = 1;

      const newToken = await Token.create(volunteer_id);

      expect(newToken).toBeInstanceOf(Token);
      expect(newToken.token_id).toBeDefined();
      expect(newToken.volunteer_id).toBe(volunteer_id);
      expect(newToken.token).toBeDefined();
    });
  });

  describe("Get Token by ID", () => {
    it("Retrieves a token by ID", async () => {
      const token_id = 1;

      const token = await Token.getOneById(token_id);

      expect(token).toBeInstanceOf(Token);
      expect(token.token_id).toBe(token_id);
    });

    it("Throws an error when token does not exist", async () => {
      const nonExistentTokenId = 9999;

      await expect(Token.getOneById(nonExistentTokenId)).rejects.toThrowError(
        "Unable to locate token."
      );
    });
  });

  describe("Get Token by Token", () => {
    it("Throws an error when token does not exist", async () => {
      const nonExistentToken = "non_existent_token";

      await expect(Token.getOneByToken(nonExistentToken)).rejects.toThrowError(
        "Unable to locate token."
      );
    });
  });
});
