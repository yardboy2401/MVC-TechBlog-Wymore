const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api/");
const dashboardRoutes = require("./dashboardRoutes");


router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;