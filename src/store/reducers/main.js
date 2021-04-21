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
    case types.SET_SHOW_DROP_DOWN:
      return {
        ...state,
        showDropDown: !state.showDropDown,
      };
    case types.SET_SELECTED:
      return {
        ...state,
        selectedData: action.payload.length > 0 ? action.payload[0] : state.all,
        selectedCountry:
          action.payload.length > 0 ? action.payload[0].country : 'WorldWide',
      };
    default:
      return state;
  }
};

export default mainReducer;