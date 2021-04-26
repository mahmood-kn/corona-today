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
export const getCountries = () => ({
  type: types.GET_COUNTRIES,
});
export const setCountries = (data) => ({
  type: types.SET_COUNTRIES,
  payload: data,
});
export const setSelected = (data) => ({
  type: types.SET_SELECTED,
  payload: data,
});
export const setFilteredDropdown = (data) => ({
  type: types.SET_FILTERED_DROPDOWN,
  payload: data,
});
export const setShowDropDown = () => ({
  type: types.SET_SHOW_DROP_DOWN,
});
export const setLoading = () => ({
  type: types.SET_LOADING,
});
