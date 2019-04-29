const router = require("express").Router();
const userRoutes = require("./users");
const apptRoutes = require("./appointments");

// Book routes
router.use("/users", userRoutes);
router.use("/appointments", apptRoutes);

module.exports = router;
