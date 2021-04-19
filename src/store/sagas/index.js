import { takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import { getAllDataSaga, yesterdaySaga } from './main';

export function* watchMain() {
  yield takeEvery(types.INITIATE_GET_ALL_DATA, getAllDataSaga);
  yield takeEvery(types.INITIATE_GET_YESTERDAY_DATA, yesterdaySaga);
}
