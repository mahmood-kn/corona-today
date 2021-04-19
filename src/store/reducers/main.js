import * as types from '../actions/types';

const initialState = {
  all: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_DATA:
      return {
        ...state,
        all: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
