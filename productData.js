const { db, users, products, wishList } = require("./models/db.js"); //from db.js

var faker = require("faker");

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

console.log(randomCard);

async function main() {
  for (let i = 0; i < 10; i += 1) {
    const email = faker.internet.email();
    await Products.create({
      value: email,
    });
  }
}
main();

// user.create, product.create
// create separate rows
// similar to Post request creating new entries
// Fetch request => set state
