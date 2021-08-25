// load data into database
const { db, users, Product, wishList } = require("./models/db.js"); //from db.js
var faker = require("faker");

async function main() {
  for (let i = 0; i < 10; i += 1) {
    var Card = faker.helpers.createCard();
    await Product.create({
      value: Card,
      productTitle: faker.commerce.productName(),
      // productImage: faker.commerce.image(),
      productImage: "",
      // productPrice: faker.commerce.price(),
      productDescription: faker.lorem.paragraph(),
    });
    console.log(Card);
  }
}
main();
