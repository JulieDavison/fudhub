const router = require("express").Router();
const recipeRoutes = require("./api.js");

// Recipe routes
router.use("/api.js", recipeRoutes);

module.exports = router;
