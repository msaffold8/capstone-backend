// Products table model

const DT = require("sequelize").DataTypes;

module.exports = (db) => {
  return db.define("Product", {
    productsId: { type: DT.INTEGER, primaryKey: true, autoIncrement: true },
    productImage: DT.STRING,
    productTitle: DT.STRING,
    productPrice: DT.INTEGER,
    productDescription: DT.STRING,
    productURl: DT.STRING,
    // productLikes: DT.INTEGER, // Add product like feature
    // WishListProduct: { type: DT.INTEGER, ref: "Product" }, // Relationship to product data / connect unique product ID to Wishlist
  });
};

// product = wishListProductID as well 