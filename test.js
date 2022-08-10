const request = require("supertest");
const baseURL = "http://localhost:3000";

describe("GET /products", () => {
	it("should return 200", async () => {
	const response = await request(baseURL).get("/products");
	expect(response.statusCode).toBe(200);
	expect(response.body.error).toBe(null);
	});
	it("should return products", async () => {
	const response = await request(baseURL).get("/products");
	expect(response.body.data.length >= 1).toBe(true);
	});
});

describe("POST /products", () => {
	const userTest = {
		id: 10,
		username: "testDummy",
		password: "tester",
		email: "tester@test.com"
	}
	it("should return 200", async () => {
	const response = await request(baseURL).post("/users").send(userTest);
	expect(response.statusCode).toBe(200);
	expect(response.body.error).toBe(null);
	});
});