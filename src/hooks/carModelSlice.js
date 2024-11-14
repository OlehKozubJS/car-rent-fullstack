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

export {};
