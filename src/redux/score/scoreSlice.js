import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
  name: "score",
  initialState: {
    points: 0,
  },
  reducers: {
    scoreUp: (state) => {
      state.points += 50;
    },
    scoreDown: (state) => {
      state.points -= 10;
    },
    resetScore: (state) => {
      state.points = 0;
    },
  },
});

export const { scoreUp, scoreDown, resetScore } = scoreSlice.actions;

export default scoreSlice.reducer;
