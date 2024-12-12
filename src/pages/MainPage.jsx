import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CarFilter, CarGallery, CarModal } from "./imports";

const MainPage = ({ cars }) => {
  const [isModal, setIsModal] = useState(false);
  const [car, setCar] = useState(null);

  const openModal = () => {
    setIsModal(true);
    setCar(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <section>
      {isModal && <CarModal car={car} onClose={closeModal} />}
      <CarFilter />
      <CarGallery cars={cars} onClick={openModal} />
    </section>
  );
};

export { MainPage };
