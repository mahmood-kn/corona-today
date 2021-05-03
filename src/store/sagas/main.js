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
export function* graphDeathsCountrySaga(action) {
  try {
    yield put(actions.setGraphLoading());
    const data = yield reqs.timeSeriesCountry(
      action.payload.country,
      action.payload.duration
    );
    yield put(actions.setTimeSeriesCountryData(data));
  } catch (err) {
    console.log(err);
  }
}
