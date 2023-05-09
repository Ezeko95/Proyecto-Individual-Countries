import { GET_COUNTRIES, GET_ACTIVITIES, POST_ACTIVITIES } from "./actions";

const initialState = {
  countries: [],
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
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
