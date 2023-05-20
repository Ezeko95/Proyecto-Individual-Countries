const {
  getActivity,
  postActivity,
} = require("../Controllers/activityController.js");

const activityPostHandler = async (req, res) => {
  const { name, difficulty, duration, season, country } = req.body;

  try {
    const activity = await postActivity({
      name,
      difficulty,
      duration,
      season,
      country,
    });
    res.status(200).send(activity);
  } catch (error) {
    console.error("Error ocurred while creating activity", error);
    res
      .status(400)
      .json({ error: "Failed to create activity. Please try again later." });
  }
};

const activityHandler = async (req, res) => {
  try {
    const activity = await getActivity();
    res.status(200).send(activity);
  } catch (error) {
    console.error("Error ocurred while fetching activity", error);
    res
      .status(400)
      .json({ error: "Failed to fetch activity. Please try again later." });
  }
};

module.exports = { activityHandler, activityPostHandler };
