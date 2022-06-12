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
  },
});

export const { scoreUp, scoreDown } = scoreSlice.actions;

export default scoreSlice.reducer;
