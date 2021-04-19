import { takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import { getAllDataSaga } from './main';

export function* watchMain() {
  yield takeEvery(types.INITIATE_GET_ALL_DATA, getAllDataSaga);
}
