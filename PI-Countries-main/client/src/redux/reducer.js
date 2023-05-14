import {
  GET_COUNTRIES,
  CLEAN_DETAIL,
  GET_COUNTRY_ID,
  GET_ACTIVITIES,
  GET_COUNTRY_BY_NAME,
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

    case GET_COUNTRY_ID:
      return {
        ...state,
        countryDetail: action.payload,
      };

    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        countryDetail: [],
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
