const { Router } = require("express");
const {
  countryHandler,
  countryIdHandler,
} = require("../Handlers/countryHandler");

const countryRouter = Router();

countryRouter.get("/", countryHandler);
countryRouter.get("/:id", countryIdHandler);

module.exports = countryRouter;
