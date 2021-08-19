// User table model

const DT = require("sequelize").DataTypes;

module.exports = (db) => {
  return db.define("wishList", {
    wishListId: { type: DT.INTEGER, primaryKey: true, autoIncrement: true },
    wishListUserID: { type: DT.INTEGER, ref: "User" }, // Relationship to user data / connect unique userID to Wishlist
    wishListTitle: DT.STRING,
    WishListProduct: { type: DT.INTEGER, ref: "Product" }, // Relationship to product data / connect unique product ID to Wishlist
  });
};

//set one to many relationship to => many to many
