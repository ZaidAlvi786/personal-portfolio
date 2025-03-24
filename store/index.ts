import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import loaderReducer from "./loaderSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    loader: loaderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
