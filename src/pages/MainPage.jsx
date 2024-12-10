import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  carsLocalData,
  setSelectedCars,
  CarFilter,
  CarGallery,
  CarModal,
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

  return (
    <section>
      <button onClick={openModal}>Open Modal</button>
      {isModal && <CarModal carId={carsLocalData[0]} onClose={closeModal} />}
      <CarFilter />
      <CarGallery />
      {carsLocalData[0]}
    </section>
  );
};

export { MainPage };
