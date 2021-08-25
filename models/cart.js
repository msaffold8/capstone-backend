//Cart table Model

const DT = require("sequelize").DataTypes;

module.exports = (db) => {
  return db.define("Cart", {
    cartID: { type: DT.INTEGER, primaryKey: true, autoIncrement: true },
    userID: DT.INTEGER,
  });
};
