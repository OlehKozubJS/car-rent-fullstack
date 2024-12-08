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

import { commonFonts } from "../style";

const MainPage = () => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <section style={{ fontFamily: "Kings-Regular" }}>
      <button onClick={openModal}>Open Modal</button>
      {isModal && <CarModal carId={9582} onClose={closeModal} />}
      <CarFilter />
      <CarGallery />
    </section>
  );
};

export { MainPage };
