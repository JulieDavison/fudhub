const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/fudhubapp"
);

const categorySeed = [
    {
        food:"burger",
        image: "https://www.waiter.com/blog/wp-content/uploads/2015/06/hamburger.jpg"
    },
    {
        food:"hotdog",
        image:"https://www.dairyqueen.com/Global/Food/Hot-Dogs_8-to-1_470x500.jpg?width=&height=810"
    },
    {
        food:"padthai",
        image:"https://www.feastingathome.com/wp-content/uploads/2016/04/easy-authentic-pad-thai-recipe-100.jpg"
    },
    {
        food:"sushi",
        image:"https://www.thespruceeats.com/thmb/IyxiJdbwFaixy4iolNYTLjBmW_w=/4288x2848/filters:fill(auto,1)/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg"
    },
    {
        food:"spaghetti",
        image:"https://www.seriouseats.com/2019/08/20190809-burst-tomato-xo-pasta-vicky-wasik21--1500x1125.jpg"
    },
    {
        food:"pizza",
        image:"https://www.simplyrecipes.com/wp-content/uploads/2019/09/easy-pepperoni-pizza-lead-4.jpg"
    }
];

db.Category
  .remove({})
  .then(() => db.Category.collection.insertMany(categorySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });