import { put } from 'redux-saga/effects';
import * as actions from '../actions/mainAction';
import { getAllData, yesterdayData } from '../../api/reqs';

export function* getAllDataSaga() {
  try {
    const data = yield getAllData();
    yield put(actions.setAll(data));
  } catch (err) {
    console.log(err);
  }
}
export function* yesterdaySaga() {
  try {
    const data = yield yesterdayData();
    yield put(actions.setYesterday(data));
  } catch (err) {
    console.log(err);
  }
}
