import { configureStore } from "@reduxjs/toolkit";
import frameworkSlice from "./frameworks/frameworkSlice";
import scoreSlice from "./score/scoreSlice";

export const store = configureStore({
  reducer: {
    frameworks: frameworkSlice,
    score: scoreSlice,
  },
});
