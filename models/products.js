// Products table model

const DT = require("sequelize").DataTypes;

module.exports = (db) => {
  return db.define("products", {
    productsId: { type: DT.INTEGER, primaryKey: true, autoIncrement: true },
    productImage: DT.STRING,
    productTitle: DT.STRING,
    productPrice: DT.INTEGER,
    productDescription: DT.STRING,
    productURl: DT.STRING,
  });
};
