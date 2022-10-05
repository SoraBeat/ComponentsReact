import { configureStore } from "@reduxjs/toolkit";

import { favListReducer, initialState } from "./reducers";

export const storeFavList = configureStore({
  reducer: favListReducer,
  preloadedState: initialState,
});
