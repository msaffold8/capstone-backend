const DT = require("sequelize").DataTypes;

module.exports = (db) => {
  return db.define("wishListUser", {
    ListId: { type: DT.INTEGER, primaryKey: true, autoIncrement: true },
    WishListUserID: { type: DT.INTEGER, ref: "User" },
    WishListUser: { type: DT.STRING, ref: "User" },
  });
};

// Relationship to User data / connect unique UserID to Wishlist
