import {
  GET_COUNTRIES,
  CLEAN_DETAIL,
  GET_ACTIVITIES,
  GET_COUNTRY_BY_NAME,
  UPDATE_ACTIVITIES
} from "./actions";

const initialState = {
  countries: [],
  countryDetail: [],
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      const { payload } = action;
      const countries = payload.map((country) => ({
        id: country.cca3,
        name: country.name.common,
        flag: country.flags[1],
        continent: country.continents[0],
        capital: Array.isArray(country.capital)
          ? country.capital.join(", ")
          : country.capital,
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      }));
      return {
        ...state,
        countries: countries,
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

    case UPDATE_ACTIVITIES:
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
