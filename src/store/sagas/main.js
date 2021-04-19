import { put } from 'redux-saga/effects';
import * as types from '../actions/types';
import { getAllData, yesterdayData } from '../../api/reqs';

export function* getAllDataSaga() {
  try {
    const data = yield getAllData();
    yield put({
      type: types.GET_ALL_DATA,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
}
export function* yesterdaySaga() {
  try {
    const data = yield yesterdayData();
    yield put({
      type: types.GET_YESTERDAY_DATA,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
}
