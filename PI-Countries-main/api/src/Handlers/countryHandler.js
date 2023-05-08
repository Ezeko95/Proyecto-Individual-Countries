const {
  getAllCountries,
  getCountriesByName,
  getCountriesById,
} = require("../Controllers/countryController");

const countryHandler = async (req, res) => {
  const { name } = req.query;
  try {
    results = name ? await getCountriesByName(name) : await getAllCountries();
    res.status(200).json(results);
  } catch (error) {
    console.error("Error occurred while fetching countries:", error);
    res
      .status(400)
      .json({ error: "Failed to fetch countries. Please try again later." });
  }
};
const countryIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const country = await getCountriesById(id);
    res.status(200).json(country);
  } catch (error) {
    console.error("Error ocurred while fecthing country by ID", error);
    res.status(400).json({
      error: "Failed to fetch countries by ID. Please try again later.",
    });
  }
};

module.exports = { countryHandler, countryIdHandler };
