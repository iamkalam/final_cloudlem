const request = require("supertest");
const app = require("../src/index");

test("GET / should return success message", async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
  expect(response.body.message).toBe("API is working!");
});
