import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  cars,
  setSelectedCars,
  CarFilter,
  CarGallery,
  CarModal,
  CarRentStyles,
  getCarModel,
} from "./imports";

const MainPage = () => {
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
    dispatch(setSelectedCars(cars.filter((car) => car.make === carMake)));
  }, [carMake]);

  return (
    <div>
      <CarRentStyles />
      <button onClick={openModal}>Open Modal</button>
      {isModal && <CarModal carId={9582} onClose={closeModal} />}
      <CarFilter />
      <CarGallery />
    </div>
  );
};

export { MainPage };
