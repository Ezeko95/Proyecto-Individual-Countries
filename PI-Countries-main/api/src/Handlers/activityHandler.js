// const activityPost = require("../Controllers/activityController.js");
const { Activity, Country } = require("../db");

const activityPostHandler = async (req, res) => {
  const { name, difficulty, duration, season, country } = req.body;
  console.log(country);

  try {
    let newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    let countryNames = await Country.findAll({ where: { id: country } });
    newActivity.addCountry(countryNames);

    res.status(200).send(newActivity);
  } catch (error) {
    console.error("Error ocurred while creating activity", error);
    res
      .status(400)
      .json({ error: "Failed to create activity. Please try again later." });
  }
};

const activityHandler = async (req, res) => {
  try {
    const activity = await Activity.findAll({
      include: [
        {
          model: Country,
          attributes: ["id"],
          through: {
            model: "country_activity", // Replace with the actual name of your intermediate table
            attributes: ["countryId"], // Include the desired attributes of the intermediate table here
          },
        },
      ],
    });
    res.status(200).send(activity);
  } catch (error) {
    console.error("Error ocurred while fetching activity", error);
    res
      .status(400)
      .json({ error: "Failed to fetch activity. Please try again later." });
  }
};

module.exports = { activityHandler, activityPostHandler };
