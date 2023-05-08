const { Router } = require("express");
const activityHandler = require("../Handlers/activityHandler");

const activityRouter = Router();

activityRouter.get("/", activityHandler);

module.exports = activityRouter;
