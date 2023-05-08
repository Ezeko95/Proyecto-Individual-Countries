const { Router } = require("express");
const {
  activityHandler,
  activityPostHandler,
} = require("../Handlers/activityHandler");

const activityRouter = Router();

activityRouter.post("/", activityPostHandler);
activityRouter.get("/", activityHandler);

module.exports = activityRouter;
