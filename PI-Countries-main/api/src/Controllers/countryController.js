const axios = require("axios");
const { URL } = process.env;
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

module.exports = getAllCountries;
