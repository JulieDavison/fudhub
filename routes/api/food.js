const router = require("express").Router();
const foodController = require("../../controllers/foodController");

router.route("/")
  .get(foodController.findAll)
  .post(foodController.create);

module.exports = router;