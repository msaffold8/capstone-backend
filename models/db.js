// database from Sequelize using postgres server
const Sequelize = require("sequelize");
const cart = require("./cart");
const cartItem = require("./cartItem");
const db = new Sequelize(
  "postgres://melaquansaffold@localhost:5432/giftdepot",
  {
    logging: false,
  }
);

// load products users files => sync() table model into database 
const users = require("./users")(db);
const Product = require("./products")(db);
const Cart = require("./cart")(db);
const CartItem = require("./cartItem")(db);
// const Wishlist = require("./wishList")(db); 


// test db connection - await authentication & log
const connectToDB = async () => {
  await db.authenticate();
  console.log("Gift depot database connected successfully");
  Cart.hasMany(CartItem, {foreignKey: "cartID"}) //from model, table join 
  CartItem.belongsTo(Product, {foreignKey: "productID"}) // from cartItems
  db.sync();
};
connectToDB();


//create new cart 
//add item 
//enpoint to retrieve item + product information 


// export db model for server.js/user.js files
module.exports = { db, users, Product, Cart, CartItem};
// Wishlist 
