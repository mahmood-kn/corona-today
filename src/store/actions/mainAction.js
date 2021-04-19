import * as types from './types';

export const getAll = () => ({
  type: types.GET_ALL_DATA,
});
export const setAll = (data) => ({
  type: types.SET_ALL_DATA,
  payload: data,
});
export const getYesterday = () => ({
  type: types.GET_YESTERDAY_DATA,
});
export const setYesterday = (data) => ({
  type: types.SET_YESTERDAY_DATA,
  payload: data,
});
