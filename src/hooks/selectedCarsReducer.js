import { createSlice } from "@reduxjs/toolkit";

import { createNewReducer } from "./imports";

const [selectedCars, setSelectedCars, getSelectedCars] = createNewReducer({
  name: "selectedCars",
  initialState: [],
});

export { selectedCars, setSelectedCars, getSelectedCars };
