import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatisticsState, Statistics } from '../types';

const initialState: StatisticsState = {
  data: null,
  loading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    fetchStatisticsRequest: (state) => {
      state.loading = true;
    },
    fetchStatisticsSuccess: (state, action: PayloadAction<Statistics>) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchStatisticsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchStatisticsRequest,
  fetchStatisticsSuccess,
  fetchStatisticsFailure,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;