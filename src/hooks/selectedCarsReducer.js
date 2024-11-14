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

const { setSelectedCars } = selectedCarsSlice.actions;
const selectedCars = selectedCarsSlice.reducer;

export { selectedCars, setSelectedCars };
