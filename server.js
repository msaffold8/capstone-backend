const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());
const { response, request } = require("express");
const { Connection } = require("pg");
const { db, users, products, wishList } = require("./models/db.js"); //from db.js
// const Env = require('dotenv').config()

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
server.get("/products", async (res, req) => {
  res.send({ products: await products.findAll() }); //products object from required db model
});
server.post("/products", async (req, res) => {
  await products.create(req.body); //  create product
  res.send({ products: await products.findAll() }); // send back all products

  // products.save(function (err, savedProducts) => { // send back products with unique id! 
  //   if (err) {
  //     res.send({error: "Could not save product to db"});
  //   } else {
  //     res.send(savedProducts);
  //   }
  // })
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
  wishList.find({}, function(err, wishLists) {
    res.send(wishLists); 
  })
})

// endpoint to add product to a specific wish list 




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
