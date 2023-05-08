const { Router } = require("express");
const {
  countryHandler,
  countryIdHandler,
  countryPostHandler,
} = require("../Handlers/countryHandler");

const countryRouter = Router();

countryRouter.get("/", countryHandler);
countryRouter.get("/:id", countryIdHandler);
countryRouter.post("/", countryPostHandler);

module.exports = countryRouter;
