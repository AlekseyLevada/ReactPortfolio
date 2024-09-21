import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
}

export const burgerSlice = createSlice({
  name: "burger",
  initialState,

  reducers: {
    toggle: (state) => {
      state.value = !state.value
    }
  }
})

export const {toggle} = burgerSlice.actions

export default burgerSlice.reducer