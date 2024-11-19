import { createSlice } from "@reduxjs/toolkit";

import {} from "./imports";

const carModelSlice = createSlice({
  name: "carModel",
  initialState: "",
  reducers: {
    setCarModel(state, action) {
      return action.payload;
    },
  },
});

const carModel = carModelSlice.reducer;

const { setCarModel } = carModelSlice.actions;

const getCarModel = (state) => {
  return state.carModel;
};

export { carModel, setCarModel, getCarModel };
