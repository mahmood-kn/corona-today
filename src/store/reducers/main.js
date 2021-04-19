import * as types from '../actions/types';

const initialState = {
  all: null,
  yesterday: null,
  loading: true,
};

const mainReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default mainReducer;
