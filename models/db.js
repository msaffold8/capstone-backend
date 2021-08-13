// database from Sequelize using postgres server
const Sequelize = require("sequelize");
const db = new Sequelize(
  "postgres://melaquansaffold@localhost:5432/giftdepot",
  {
    logging: false,
  }
);

// load users.js => sync() table model into database 
const users = require("./users")(db);

// test db connection - await authentication & log
const connectToDB = async () => {
  await db.authenticate();
  console.log("Gift depot database connected successfully");

  db.sync(); 
};
connectToDB();



// export db model for server.js/user.js files
module.exports = { db, users };
