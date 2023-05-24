const { Router } = require("express");
const {
  activityHandler,
  activityPostHandler,
  activityDeleteHandler,
} = require("../Handlers/activityHandler");

const activityRouter = Router();

activityRouter.post("/", activityPostHandler);
activityRouter.get("/", activityHandler);
activityRouter.delete("/:id", activityDeleteHandler);

module.exports = activityRouter;
