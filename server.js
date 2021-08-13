const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());
const { Connection } = require("pg");
const { db, users } = require("./models/db.js"); // users from db.js
// const Env = require('dotenv').config()

server.get("/", (req, res) => {
  res.send({ hello: "world" });
});

// user endpoints
server.get("/users", async (req, res) => {
  res.send({ users: await users.findAll() }); // Get all users
});
server.post("/users", async (req, res) => {
  await users.create(req.body); //  create user
  res.send({ users: await users.findAll() }); // send back all user
});
// prove in postman => send data to user endpoint

// login endpoints
server.use("/Login", (req, res) => {
  res.send({
    token: "test123",
  });
});
server.post("/Login", (req, res) => {
  res.send({
    token: "test123",
  });
});



server.listen(3002, () => {
  console.log("Server is running on 3002");
});
// test server Connection - http://localhost:3002/login
