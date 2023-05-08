const axios = require("axios");
const { Op } = require("sequelize");
const { Country } = require("../db");

const getAllCountries = async () => {
  const apiResponse = await axios.get("https://restcountries.com/v3/all");
  // console.log(apiResponse.data);
  const countries = apiResponse.data.map((country) => ({
    id: country.cca3,
    name: country.name.common,
    flag: country.flags.find((flag) => flag.endsWith(".png")), // find para que traiga un solo archivo
    continent: Array.isArray(country.continent)
      ? country.continent.join(",")
      : country.continent,
    // continent es array? Convierto para que traiga un solo string
    capital: Array.isArray(country.capital)
      ? country.capital.join(", ")
      : country.capital,
    // es array? convierto array en string
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
  const country = Country.findOne({ where: { id } });
  return country;
};

module.exports = { getAllCountries, getCountriesByName, getCountriesById };
