const axios = require("axios");
const { Op } = require("sequelize");
const { Country } = require("../db");

const getAllCountries = async () => {
  const apiResponse = await axios.get("https://restcountries.com/v3/all");
  const countries = apiResponse.data.map((country) => ({
    id: country.cca3,
    name: country.name.common,
    flag: country.flags[1],
    continent: country.continents[0],
    capital: Array.isArray(country.capital)
      ? country.capital.join(", ")
      : country.capital,
    subregion: country.subregion,
    area: country.area,
    population: country.population,
  }));
  const savedCountries = await Country.bulkCreate(countries);
  return savedCountries;
};

const getCountriesByName = async (name) => {
  const country = await Country.findAll({
    where: { name: { [Op.like]: `%${name}` } },
  });
  return country;
};

const getCountriesById = async (id) => {
  const country = await Country.findOne({ where: { id } });
  return country;
};

module.exports = { getCountriesByName, getCountriesById, getAllCountries };
