const axios = require("axios");

export const validateActivityName = async (name) => {
  try {
    const response = await axios(`/activities?name=${name}`);
    return !response.exists; // Returns true if the name is available, false if it already exists
  } catch (error) {
    console.error("La actividad ya existe.", error);
    return false; // Treat any error as the name already exists to be safe
  }
};
