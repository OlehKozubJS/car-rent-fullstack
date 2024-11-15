import { createSlice } from "@reduxjs/toolkit";

const selectedCarsSlice = createSlice({
  name: "selectedCars",
  initialState: [],
  reducers: {
    setSelectedCars(state, action) {
      const { cars, carModel } = action.payload;

      return cars.filter((car) => car.make === carModel);
    },
  },
});

const selectedCars = selectedCarsSlice.reducer;

const { setSelectedCars } = selectedCarsSlice.actions;

const getSelectedCars = (state) => {
  return state.selectedCars;
};

export { selectedCars, setSelectedCars, getSelectedCars };
