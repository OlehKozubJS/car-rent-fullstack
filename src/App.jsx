import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { cars } from "./data_base";

import { setSelectedCars } from "./hooks";

import { CarFilter, CarGallery, CarModal } from "./components";

import { TestPage } from "./TestPage";

import { CarRentStyles } from "./CarRentStyles";
import { getCarModel } from "./hooks";

const App = () => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const dispatch = useDispatch();

  const carMake = useSelector(getCarModel);

  useEffect(() => {
    dispatch(setSelectedCars({ cars, carMake }));
  }, [carMake]);

  return (
    <div>
      <CarRentStyles />
      <button onClick={openModal}>Open Modal</button>
      {isModal && <CarModal carId={9582} onClose={closeModal} />}
      <CarFilter />
      <CarGallery />
      <TestPage />
    </div>
  );
};

export { App };
