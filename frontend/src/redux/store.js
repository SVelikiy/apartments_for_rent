import { configureStore } from "@reduxjs/toolkit";
import { apartmentsReducer } from "./apartments/slice";

export const store = configureStore({
  reducer: {
    apartments: apartmentsReducer,
  },
});

export default store;