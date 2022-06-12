import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const frameworkAdaptor = createEntityAdapter();
const initialState = frameworkAdaptor.getInitialState({
  status: "idle",
});

export const frameworkSelector = frameworkAdaptor.getSelectors(
  (state) => state.frameworks
);

export const frameworkSlice = createSlice({
  name: "frameworks",
  initialState,
  reducers: {
    addFrameworks: frameworkAdaptor.addMany,
    addFrameworksFulfilled: (state) => {
      state.status = "succeeded";
    },
    updateFramework: frameworkAdaptor.updateOne,
  },
});

export const { addFrameworks, addFrameworksFulfilled, updateFramework } =
  frameworkSlice.actions;

export default frameworkSlice.reducer;
