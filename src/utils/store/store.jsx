import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from  '../store/slices/burgerSlice'

export const store = configureStore({
  reducer: {
    burgerReducer,
  },
})