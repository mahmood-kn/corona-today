import * as types from './types';

export const getAll = () => ({
  type: types.INITIATE_GET_ALL_DATA,
});
export const getYesterday = () => ({
  type: types.INITIATE_GET_YESTERDAY_DATA,
});
