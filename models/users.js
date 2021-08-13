// table model

const DT = require("sequelize").DataTypes;

module.exports = (db) => {
  return db.define("users", {
    userId: { type: DT.INTEGER, primaryKey: true, autoIncrement: true },
    productImage: DT.STRING,
    productTitle: DT.STRING,
    productPrice: DT.INTEGER,
    productDescription: DT.STRING,
  });
};
