// const router = require("express").Router();
// const axios = require("axios");
// // //API Key goes here
// // const BASEURL = "https://api.spoonacular.com/recipes/search?query=";
// // const APIKEY = process.env.APIKEY;


//   // Gets all food
//  router.get("/food/:query", function (req, res) {
//      axios
//       .get(BASEURL + req + APIKEY)
//       .then(function(results){
//         console.log(results);
//       })
//       .catch(function(err){
//         console.log(err);
//       })

//   });

// // Matches with "/api/api"
// router.route("/")
//   .get(foodController.findAll)
//   .post(foodController.create);

// // Matches with "/api/api/:id"
// router
//   .route("/id/:id")
//   .get(foodController.findById)
//   .put(foodController.update)
//   .delete(foodController.remove);

// module.exports = router;