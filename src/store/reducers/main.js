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
        showDropDown: action.payload,
      };
    case types.SET_SELECTED:
      return {
        ...state,
        selectedData: action.payload.length > 0 ? action.payload[0] : state.all,
        selectedCountry:
          action.payload.length > 0 ? action.payload[0].country : 'WorldWide',
      };
    case types.SET_FILTERED_DROPDOWN:
      return {
        ...state,
        filteredDropdown: action.payload,
      };
    case types.SET_FILTERED_TABLE:
      return {
        ...state,
        filteredTable: action.payload,
        currPage: 1,
      };
    case types.SET_CURR_ITEMS:
      return {
        ...state,
        currentItems: action.payload,
      };
    case types.CHANGE_CURR_PAGE:
      return {
        ...state,
        currPage: action.payload,
      };
    case types.GET_TIME_SERIES_COUNTRY:
      return {
        ...state,
        currCountryGraph: action.payload.country,
      };
    case types.SET_TIME_SERIES_COUNTRY:
      return {
        ...state,
        timeSeriesCountryData: action.payload,
        graphLoading: false,
      };
    case types.SET_LINEAR_VIEW_DATA:
      return {
        ...state,
        linearViewData: action.payload,
      };
    case types.SET_GRAPH_LOADING:
      return {
        ...state,
        graphLoading: true,
      };
    case types.OPEN_SIDE_MENU:
      return {
        ...state,
        openSideMenu: action.payload,
      };
    case types.DEFERRED_PROMPT:
      return {
        ...state,
        deferredPrompt: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
