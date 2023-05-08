const getAllCountries = require("../Controllers/countryController");

const countryHandler = async (req, res) => {
  try {
    results = await getAllCountries();
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const countryIdHandler = async (req, res) => {
  res.status(200).send("ok");
};
const countryPostHandler = async (req, res) => {
  res.status(200).send("ok");
};

module.exports = { countryHandler, countryIdHandler, countryPostHandler };
