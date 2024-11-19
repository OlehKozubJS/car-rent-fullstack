import { createNewReducer } from "./imports";

const [carModel, setCarModel, getCarModel] = createNewReducer({
  name: "carModel",
  initialState: "",
});

export { carModel, setCarModel, getCarModel };
