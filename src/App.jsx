import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cars } from "./data_base";

import {
  getCarModel,
  getSelectedCars,
  selectedCars,
  setSelectedCars,
} from "./hooks";

import { CarFilter, CarGallery, CarModal } from "./components";

import { TestPage } from "./TestPage";

import { CarRentStyles } from "./CarRentStyles";

const App = () => {
  const dispatch = useDispatch();

  const [carModel] = useState(useSelector(getCarModel));

  dispatch(setSelectedCars({ cars, carModel }));

  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div>
      <CarRentStyles />
      <button onClick={openModal}>Open Modal</button>
      {isModal && <CarModal carId={9582} onClose={closeModal} />}
      <CarGallery />
      <CarFilter />
      <TestPage />
    </div>
  );
};

export { App };
