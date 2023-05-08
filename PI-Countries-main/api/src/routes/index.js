const { Router } = require("express");
const countryRouter = require("./countryRouter");

const router = Router();

router.use("/countries", countryRouter);
router.use("/activities", activityRouter);

module.exports = router;
