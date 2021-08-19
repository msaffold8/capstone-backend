// User table model

const DT = require("sequelize").DataTypes;

module.exports = (db) => {
  return db.define("User", {
    userId: { type: DT.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DT.STRING,
    lastName: DT.STRING,
    userName: DT.STRING,
    userEmail: DT.STRING,
  });
};
