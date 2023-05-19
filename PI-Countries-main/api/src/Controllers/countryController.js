const { Op } = require("sequelize");
const { Country, Activity } = require("../db");
const axios = require("axios");

const getAllCountries = async () => {
  return await Country.findAll({
    include: [
      {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: { attributes: [] },
      },
    ],
  });
};

const getCountriesByName = async (name) => {
  return await Country.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });
};

const getCountriesById = async (id) => {
  return await Country.findOne({
    where: { id },
    include: [
      {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: { attributes: [] },
      },
    ],
  });
};

module.exports = { getCountriesByName, getCountriesById, getAllCountries };

// ***********************// getCountriesAPI //********************************//
// const getAllCountries = async () => {
//   const apiResponse = await axios.get("https://restcountries.com/v3/all");
//   const countries = apiResponse.data.map((country) => ({
//     id: country.cca3,
//     name: country.name.common,
//     flag: country.flags[1],
//     continent: country.continents[0],
//     capital: Array.isArray(country.capital)
//       ? country.capital.join(", ")
//       : country.capital,
//     subregion: country.subregion,
//     area: country.area,
//     population: country.population,
//   }));
//   const savedCountries = await Country.bulkCreate(countries);
//   return savedCountries;
// };
