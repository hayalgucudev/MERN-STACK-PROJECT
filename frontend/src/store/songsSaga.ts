import { takeLatest, call, put, all } from 'redux-saga/effects';
import { fetchSongs, createSong, updateSong, deleteSong } from '../api/songs';
import {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongRequest,
  createSongSuccess,
  createSongFailure,
  updateSongRequest,
  updateSongSuccess,
  updateSongFailure,
  deleteSongRequest,
  deleteSongSuccess,
  deleteSongFailure,
} from './songsSlice';
import { Song } from '../types';

// Saga to fetch songs
function* fetchSongsSaga(): Generator<any, void, Song[]> {
  try {
    const songs: Song[] = yield call(fetchSongs);
    yield put(fetchSongsSuccess(songs));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchSongsFailure(error.message));
    } else {
      yield put(fetchSongsFailure('An unknown error occurred.'));
    }
  }
}

// Saga to create a song
function* createSongSaga(action: ReturnType<typeof createSongRequest>): Generator<any, void, Song> {
  try {
    const newSong: Song = yield call(createSong, action.payload);
    yield put(createSongSuccess(newSong));
  } catch (error) {
    if (error instanceof Error) {
      yield put(createSongFailure(error.message));
    } else {
      yield put(createSongFailure('An unknown error occurred.'));
    }
  }
}

function* updateSongSaga(action: ReturnType<typeof updateSongRequest>): Generator<any, void, Song> {
  try {
    const { id, song } = action.payload;
    if (!song.title || !song.artist || !song.album || !song.genre) {
      throw new Error('Invalid payload');
    }
    const updatedSong: Song = yield call(updateSong, id, song);
    yield put(updateSongSuccess(updatedSong));
  } catch (error) {
    if (error instanceof Error) {
      yield put(updateSongFailure(error.message));
    } else {
      yield put(updateSongFailure('An unknown error occurred.'));
    }
  }
}

// Saga to delete a song
function* deleteSongSaga(action: ReturnType<typeof deleteSongRequest>): Generator<any, void, any> {
  try {
    yield call(deleteSong, action.payload);
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    if (error instanceof Error) {
      yield put(deleteSongFailure(error.message));
    } else {
      yield put(deleteSongFailure('An unknown error occurred.'));
    }
  }
}

// Watcher saga
export function* watchSongsSaga() {
  yield takeLatest(fetchSongsRequest.type, fetchSongsSaga);
  yield takeLatest(createSongRequest.type, createSongSaga);
  yield takeLatest(updateSongRequest.type, updateSongSaga);
  yield takeLatest(deleteSongRequest.type, deleteSongSaga);
}

// Root saga
export default function* songsSaga() {
  yield all([watchSongsSaga()]);
}