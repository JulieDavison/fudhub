const router = require("express").Router();
const foodRoutes = require("./food");

// Food routes
router.use("/food", foodRoutes);

module.exports = router;
