// src/store/rootSaga.ts

import { all } from 'redux-saga/effects';
import { watchSongsSaga } from './songsSaga';
import { watchStatisticsSaga } from './statisticsSaga';

export default function* rootSaga() {
  yield all([
    watchSongsSaga(),
    watchStatisticsSaga(),
  ]);
}