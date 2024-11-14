import { createSlice } from "@reduxjs/toolkit";

const carModelSlice = createSlice({
  name: "carModel",
  initialState: "",
  reducers: {
    setCarModel(state, action) {
      return action.payload;
    },
  },
});

const { setCarModel } = carModelSlice.actions;
const carModel = carModelSlice.reducer;

export {};
