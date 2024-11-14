import { createSlice } from "@reduxjs/toolkit";

import { cars } from "../data_base";

const selectedCarsSlice = createSlice({
  name: "selectedCars",
  initialState: [...cars],
  reducers: {
    setSelectedCars(state, action) {
      const { cars, carModel } = action.payload;

      return cars.filter((car) => car.model === carModel);
    },
  },
});

const selectedCars = selectedCarsSlice.reducer;

const { setSelectedCars } = selectedCarsSlice.actions;

const getSelectedCars = (state) => {
  return state.selectedCars;
};

export { selectedCars, setSelectedCars, getSelectedCars };
