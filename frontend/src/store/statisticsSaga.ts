import { call, put, takeLatest, CallEffect, PutEffect } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchStatisticsRequest,
  fetchStatisticsSuccess,
  fetchStatisticsFailure,
} from '../store/statisticsSlice';
import { Statistics } from '../types';

// Define the return type of the generator function
type FetchStatisticsGenerator = Generator<
  CallEffect | PutEffect<{ type: string; payload?: any }>,
  void,
  any
>;

function* fetchStatistics(): FetchStatisticsGenerator {
  try {
    const response = yield call(axios.get, '/api/statistics');
    const statistics: Statistics = response.data; // Ensure this matches the Statistics type
    yield put(fetchStatisticsSuccess(statistics));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchStatisticsFailure(error.message));
    }
  }
}
export function* watchStatisticsSaga() {
  yield takeLatest(fetchStatisticsRequest.type, fetchStatistics);
}

export default function* statisticsSaga() {
  yield takeLatest(fetchStatisticsRequest.type, fetchStatistics);
}