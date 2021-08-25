const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());
const { Connection } = require("pg");
const cartItem = require("./models/cartItem.js");
const {
  db,
  users,
  Product,
  Wishlist,
  Cart,
  CartItem,
} = require("./models/db.js"); //from db.js

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

// wishList endpoints with post
server.post("/wishlist", async (res, req) => {
  await Wishlist.create(req.body);
  const items = await Wishlist.findAll({});

  res.send({
    items: items.map((item) => {
      return {
        productImage: item.productImage,
        wishListItemID: item.productsId,
        productTitle: item.productTitle,
      };
    }),
  });
});

// map over both tables ??????
server.get("/wishlist", async (res, req) => {
  const items = await Wishlist.findAll({});
  res.send({
    items: items.map((item) => {
      return {
        wishListItemID: item.productsId,
        productTitle: item.productTitle,
        WishListUserName: item.userName,
        productImage: item.productImage,
      };
    }),
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

//Cart endpoints - Edit to calls to endpoint should return newly updated cart
server.get("/cart", async (req, res) => {
  const items = await Cart.findOne({
    include: [{ model: CartItem, include: [{ model: Product }] }], //Get cart items + products items
  });
  res.send({
    items: items,
  });
});

server.post("/cart", async (req, res) => {
  //
  let existingCart = await Cart.findOne(); // find // modify to use userID
  if (!existingCart) {
    existingCart = await Cart.create(); // create cart in DB
  }
  await CartItem.create({
    cartID: existingCart.cartID,
    productID: req.body.productID,
  });
  res.send({ success: true }); //for front end, required to send back something

  // await Product.create(req.body);
  // const items = await Product.findAll({});

  // res.send({
  //   items: items.map((item) => {
  //     return {
  //       cartItemID: item.productsId,
  //       productTitle: item.productTitle,
  //       productPrice: item.productPrice,
  //       productImage: item.productImage,
  //     };
  //   }),
  // });
});

server.put("/cart", async (req, res) => {
  await Product.create(req.body); // PUT to add to current state 
  res.send({ products: await Product.findAll() }); // send back all products
});
server.delete("/cart", async (req, res) => {
  await Product.create(req.body); // DELETE change state of cart
  res.send({ products: await Product.findAll() }); // send back all products
});

server.listen(3002, () => {
  console.log("Server is running on 3002");
});
// test server Connection - http://localhost:3002/login
