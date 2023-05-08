import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const POST_ACTIVITIES = "POST_ACTIVITIES";

export const getCountries = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/countries");
    dispatch({ type: GET_COUNTRIES, payload: response.data });
  };
};

export const getCountryDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/countries/${id}`);
    dispatch({ type: GET_COUNTRY_DETAIL, payload: response.data });
  };
};

export const getCountryByName = (name) => {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/countries?=${name}`
    );
    dispatch({ type: GET_COUNTRY_BY_NAME, payload: response.data });
  };
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
