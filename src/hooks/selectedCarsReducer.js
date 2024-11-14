import { createSlice } from "@reduxjs/toolkit";

const selectedCarsSlice = createSlice({
  name: "selectedCars",
  initialState: [],
  reducers: {
    setSelectedCars(state, action) {
      const {} = action.payload;

      return action.payload.cars.filter(
        (carBrand) => carBrand === action.payload.model
      );
    },
  },
});

const { setSelectedCars } = selectedCarsSlice.actions;
const selectedCars = selectedCarsSlice.reducer;

export { selectedCars, setSelectedCars };
