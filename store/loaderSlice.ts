import { createSlice } from "@reduxjs/toolkit";

interface LoaderState {
  isLoading: boolean;
}

const initialState: LoaderState = {
  isLoading: true,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    finishLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { finishLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
