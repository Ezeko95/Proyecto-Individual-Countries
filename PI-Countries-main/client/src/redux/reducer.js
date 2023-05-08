import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  GET_COUNTRY_BY_NAME,
  GET_ACTIVITIES,
  POST_ACTIVITIES,
} from "./actions";

const initialState = {
  countries: [],
  countryDetail: [],
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case POST_ACTIVITIES:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
