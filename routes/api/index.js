const router = require("express").Router();
const foodRoutes = require("./food");

router.use("/food", foodRoutes);

module.exports = router;