import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  carsLocalData,
  setSelectedCars,
  CarFilter,
  CarGallery,
  CarModal,
  CarRentGlobalStyle,
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
    dispatch(
      setSelectedCars(carsLocalData.filter((car) => car.make === carMake))
    );
  }, [carMake]);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isModal && <CarModal carId={9582} onClose={closeModal} />}
      <CarFilter />
      <CarGallery />
    </div>
  );
};

export { MainPage };
