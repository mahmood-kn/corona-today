import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as sagas from './main';

export function* watchMain() {
  yield all([
    takeEvery(types.GET_ALL_DATA, sagas.getAllDataSaga),
    takeEvery(types.GET_YESTERDAY_DATA, sagas.yesterdaySaga),
    takeEvery(types.GET_COUNTRIES, sagas.countriesSaga),
  ]);
}
