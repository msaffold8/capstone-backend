// Wishlist table model

const DT = require("sequelize").DataTypes;

module.exports = (db) => {
  return db.define("Wishlist", {
    wishListId: { type: DT.INTEGER, primaryKey: true, autoIncrement: true },
    wishListTitle: DT.STRING,
    WishListProductID: { type: DT.INTEGER, ref: "wishListProduct" },
    WishListProduct: { type: DT.STRING, ref: "Product" },
    wishListUserID: { type: DT.INTEGER, ref: "wishListUser" },
    WishListUserName: { type: DT.STRING, ref: "User" },
  });
};

// Wishlist needs to know -
// who the user is
// what product is in their wishlist
//set one to many relationship to => many to many

// row represent product on wishlist
// wishlisttopruct - wishListId product id  then rows
