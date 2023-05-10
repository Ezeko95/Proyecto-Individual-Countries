import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_COUNTRY_ID = "GET_COUNTRY_ID";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const POST_ACTIVITIES = "POST_ACTIVITIES";

export const getCountries = () => async (dispatch) => {
  try {
    let json = await axios.get("http://localhost:3001/countries");
    return dispatch({ type: GET_COUNTRIES, payload: json.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCountryByName = (name) => {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/countries?=${name}`
    );
    dispatch({ type: GET_COUNTRY_BY_NAME, payload: response.data });
  };
};

export const getCountryId = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/countries/${id}`);
    dispatch({ type: GET_COUNTRY_ID, payload: response.data });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const postActivity = (payload) => {
  return async function (dispatch) {
    const response = await axios.post(
      `http://localhost:3001/activities`,
      payload
    );
    console.log(response);
    return response;
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/activities");

    dispatch({ type: GET_ACTIVITIES, payload: response.data });
  };
};
