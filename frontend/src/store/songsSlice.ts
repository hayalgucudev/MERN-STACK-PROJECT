import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SongsState, Song } from '../types';

const initialState: SongsState = {
  songs: [],
  loading: false,
  error: null,
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    // Fetch Songs
    fetchSongsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSongsSuccess: (state, action: PayloadAction<Song[]>) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('Fetched Songs:', action.payload);
      }
      state.songs = action.payload;
      state.loading = false;
    },
    fetchSongsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Create Song
    createSongRequest: (state, action: PayloadAction<Omit<Song, 'id'>>) => {
      state.loading = true;
      state.error = null;
    },
    createSongSuccess: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
      state.loading = false;
    },
    createSongFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Update Song
  updateSongRequest(state, action: PayloadAction<{ id: string, song: Omit<Song, 'id'> }>) {
      state.loading = true;
      state.error = null;
    },
    updateSongSuccess(state, action: PayloadAction<Song>) {
      const index = state.songs.findIndex(song => song.id === action.payload.id);
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
      state.loading = false;
    },
    updateSongFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    // Delete Song
      deleteSongRequest(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    deleteSongSuccess(state, action: PayloadAction<string>) {
      state.songs = state.songs.filter(song => song.id !== action.payload);
      state.loading = false;
    },
    deleteSongFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    // Clear Errors
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
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
  clearError,
} = songsSlice.actions;

export default songsSlice.reducer;
