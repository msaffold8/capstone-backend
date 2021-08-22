const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());
const { Connection } = require("pg");
const { db, users, Product, wishList } = require("./models/db.js"); //from db.js

server.get("/", (req, res) => {
  res.send({ hello: "world" });
});

// user endpoints
server.get("/users", async (req, res) => {
  res.send({ users: await users.findAll() }); // get all users
});
server.post("/users", async (req, res) => {
  await users.create(req.body); //  create user
  res.send({ users: await users.findAll() }); // send back all users
});
// prove in postman(client) => send data to user endpoint(api) => data travels to db => back to api => back to client

//Products api endpoints to get/post products
server.get("/products", async (req, res) => {
  res.send({ products: await Product.findAll() }); //products object from required db model
});

server.post("/products", async (req, res) => {
  await Product.create(req.body); //  create product
  res.send({ products: await Product.findAll() }); // send back all products
});

// wishList endpoints with put
server.post("/wishlist", (res, req) => {
  const wishList = new wishList(); //from db model
  wishList.title = req.body.title;
  wishList.save((err, newWishList) => {
    if (err) {
      res.send({ err: "could not create new wishlist item" });
    } else {
      res.send(newWishList);
    }
  });
});

server.get("/wishlist", (res, req) => {
  wishList.find({}, function (err, wishLists) {
    res.send(wishLists);
  });
});
// Endpoint to add product to a specific wish list

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
