const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());
const { Connection } = require("pg");
const { db, users } = require("./models/db.js");

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

server.get("/", (req, res) => {
  res.send({ hello: "world" });
});
server.get("/users", async (req, res) => {
  res.send();
});

server.listen(3002, () => {
  console.log("Server is running on 3002");
});
// test server Connection - http://localhost:3002/login
