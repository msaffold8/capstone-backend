//wishListProduct
const DT = require("sequelize").DataTypes;

module.exports = (db) => {
  return db.define("wishListProduct", {
    ListId: { type: DT.INTEGER, primaryKey: true, autoIncrement: true },
    WishListProductID: { type: DT.INTEGER, ref: "Product" },
    WishListProduct: { type: DT.STRING, ref: "Product" },
  });
};

// Relationship to product data / connect unique product ID to Wishlist
