import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CarFilter, CarGallery, CarModal } from "./imports";

const MainPage = ({ cars }) => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const [car, setCar] = useState(false);

  return (
    <section>
      <button onClick={openModal}>Open Modal</button>
      {isModal && <CarModal car={car} onClose={closeModal} />}
      <CarFilter />
      <CarGallery cars={cars} onClick={handleClick} />
    </section>
  );
};

export { MainPage };
