import { put } from 'redux-saga/effects';
import * as types from '../actions/types';
import getAllData from '../../api/all';

export function* getAllDataSaga() {
  try {
    const data = yield getAllData();
    console.log(data);
    yield put({
      type: types.GET_ALL_DATA,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
}
