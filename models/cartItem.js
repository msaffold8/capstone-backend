// CartID
//ProductID

const DT = require("sequelize").DataTypes;

module.exports = (db) => {
  return db.define("CartItem", {
    cartItemID: { type: DT.INTEGER, primaryKey: true, autoIncrement: true },
    productID: DT.INTEGER,
    cartID: DT.INTEGER,
  });
};
