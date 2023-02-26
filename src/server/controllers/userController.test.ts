import request from "supertest";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { MongoMemoryServer } from "mongodb-memory-server";
import connectDataBase from "../../database/connectDatabase";
import User from "../../database/models/User";
import app from "..";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  await connectDataBase(server.getUri());
});

afterAll(async () => {
  await server.stop();
  await mongoose.connection.close();
});

afterEach(async () => {
  await User.deleteMany();
});

const mockUser = {
  name: "Vitor Borba Ferreira",
  username: "Rivaldo",
  password: "caballoloco",
  email: "lagartomanco@rfbf.com",
  avatar: "detrasdelbalon.jpeg",
};

const endpoint = "/users/register";

describe("Given a 'users/register' endpoint", () => {
  describe("When it receive a request with name 'Vitor Borba Ferreira', username 'Rivaldo', email 'lagartomanco@rfbf.com' y avatar 'detrasdelbalon.jpeg'", () => {
    test("Then it should respond with status 201 and message 'The user has been created' with username 'Rivaldo'", async () => {
      const expectedStatus = 201;
      const expectedMessage = "The user has been created";

      const response = await request(app).post(endpoint).send(mockUser);

      expect(response.status).toBe(expectedStatus);
      expect(response.body).toHaveProperty("message", expectedMessage);
    });
  });
});
