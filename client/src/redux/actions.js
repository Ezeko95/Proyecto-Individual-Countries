import countryData from "../assets/countries.json";
import activityData from "../assets/activites.json";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_COUNTRY_ID = "GET_COUNTRY_ID";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const UPDATE_ACTIVITIES = "UPDATE_ACTIVITIES";

export const getCountries = () => async (dispatch) => {
  try {
    return dispatch({ type: GET_COUNTRIES, payload: countryData });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCountryByName = (name) => {
  return async function (dispatch) {
    dispatch({ type: GET_COUNTRY_BY_NAME, payload: countryData });
    console.log(countryData);
  };
};

export const getCountryId = (id) => {
  return async function (dispatch) {
    dispatch({ type: GET_COUNTRY_ID, payload: countryData });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const getActivities = () => async (dispatch) => {
  try {
    return dispatch({ type: GET_ACTIVITIES, payload: activityData });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateActivities = (activities) => {
  return {
    type: UPDATE_ACTIVITIES,
    payload: activities,
  };
};
