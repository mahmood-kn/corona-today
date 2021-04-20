import { put } from 'redux-saga/effects';
import * as actions from '../actions/mainAction';
import * as reqs from '../../api/reqs';

export function* getAllDataSaga() {
  try {
    yield put(actions.setLoading());
    const data = yield reqs.getAllData();
    yield put(actions.setAll(data));
  } catch (err) {
    console.log(err);
  }
}
export function* yesterdaySaga() {
  try {
    yield put(actions.setLoading());
    const data = yield reqs.yesterdayData();
    yield put(actions.setYesterday(data));
  } catch (err) {
    console.log(err);
  }
}
export function* countriesSaga() {
  try {
    yield put(actions.setLoading());
    const data = yield reqs.countries();
    yield put(actions.setCountries(data));
  } catch (err) {
    console.log(err);
  }
}
