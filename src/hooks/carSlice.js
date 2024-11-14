import { createSlice } from "@reduxjs/toolkit";

const carsInformationSlice = createSlice({
  name: "carsInformation",
  initialState: [],
  reducers: {
    setCarsInformation(state, action) {
      return action.payload.cars.filter(
        (carBrand) => carBrand === action.payload.model
      );
    },
  },
});

const { setCarsInformation } = carsInformationSlice.actions;
const carsInformation = carsInformationSlice.reducer;

export { carsInformation, setCarsInformation };
