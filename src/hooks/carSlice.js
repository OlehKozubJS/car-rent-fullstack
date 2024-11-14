import { createSlice } from "@reduxjs/toolkit";

const carsInformationSlice = createSlice({
  name: "carsInformation",
  initialState: [],
  reducers: {
    getCarsInformation(state, action) {
      return action.payload.cars.filter(
        (carBrand) => carBrand === action.payload.model
      );
    },
  },
});

const { getCarsInformation } = carsInformationSlice.actions;
const carsInformation = carsInformationSlice.reducer;

export { getCarsInformation };
