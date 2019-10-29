const router = require("express").Router();
const foodRoutes = require("./api.js");

// Food routes
router.use("/api.js", foodRoutes);

module.exports = router;
