import { takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import { getAllDataSaga, yesterdaySaga } from './main';

export function* watchMain() {
  yield takeEvery(types.GET_ALL_DATA, getAllDataSaga);
  yield takeEvery(types.GET_YESTERDAY_DATA, yesterdaySaga);
}
