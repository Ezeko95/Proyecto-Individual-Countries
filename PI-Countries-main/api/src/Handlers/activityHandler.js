// const createActivity = require("../Controllers/activityController.js");
const { Activity } = require("../db");

const activityPostHandler = async (req, res) => {
  const { name, difficulty, duration, season } = req.body;

  try {
    let newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    res.status(200).send(newActivity);
  } catch (error) {
    console.error("Error ocurred while creating activity", error);
    res
      .status(400)
      .json({ error: "Failed to create activity. Please try again later." });
  }
};

const activityHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const activity = await Activity.findByPK(id);
    res.status(200).send(activity);
  } catch (error) {
    console.error("Error ocurred while fetching activity", error);
    res
      .status(400)
      .json({ error: "Failed to fetch activity. Please try again later." });
  }
};

module.exports = { activityHandler, activityPostHandler };
