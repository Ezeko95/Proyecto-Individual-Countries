const { Activity, Country } = require("../db");

const postActivity = async ({
  name,
  difficulty,
  duration,
  season,
  country,
}) => {
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  for (const countryId of country) {
    let countryObj = await Country.findByPk(countryId);
    if (countryObj) {
      newActivity.addCountry(countryObj);
    }
  }

  return newActivity;
};

const getActivities = async () => {
  const activity = await Activity.findAll();
  return activity;
};

module.exports = { getActivities, postActivity };
