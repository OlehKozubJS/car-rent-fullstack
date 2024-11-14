import { createSlice } from "@reduxjs/toolkit";

const selectedCarsSlice = createSlice({
  name: "selectedCars",
  initialState: [],
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
  state.selectedCars;
};

export { selectedCars, setSelectedCars, getSelectedCars };
