import { combineReducers } from 'redux';
import songsReducer from './songsSlice';

const rootReducer = combineReducers({
  songs: songsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
