import * as types from '../actions/types';

// const initialState = {
//   all: {},
//   yesterday: {},
//   loading: true,
// };

const mainReducer = (state, action) => {
  switch (action.type) {
    case types.SET_ALL_DATA:
      return {
        ...state,
        all: action.payload,
        loading: false,
      };
    case types.SET_YESTERDAY_DATA:
      return {
        ...state,
        yesterday: action.payload,
        loading: false,
      };
    case types.SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case types.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default mainReducer;
