const router = require("express").Router();
const foodRoutes = require("./api.js");

// Recipe routes
router.use("/api.js", foodRoutes);

module.exports = router;
