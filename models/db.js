// database from Sequelize using postgres server
const Sequelize = require("sequelize");
const db = new Sequelize(
  "postgres://melaquansaffold@localhost:5432/giftdepot",
  {
    logging: false,
  }
);

// test db connection - await authentication & log
const connectToDB = async () => {
  await db.authenticate();
  console.log("Gift depot database connected successfully");
};
connectToDB();

// export db model for server.js/user.js files
module.exports = { db };
