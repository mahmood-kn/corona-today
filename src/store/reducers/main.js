import * as types from '../actions/types';

const initialState = {
  all: null,
  yesterday: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_DATA:
      return {
        ...state,
        all: action.payload,
      };
    case types.GET_YESTERDAY_DATA:
      return {
        ...state,
        yesterday: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
