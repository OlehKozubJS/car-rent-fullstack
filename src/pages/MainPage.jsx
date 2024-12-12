import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { carsLocalData, CarFilter, CarGallery, CarModal } from "./imports";

const MainPage = () => {
  const [isModal, setIsModal] = useState(true);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <section>
      <button onClick={openModal}>Open Modal</button>
      {isModal && <CarModal car={carsLocalData[1]} onClose={closeModal} />}
      <CarFilter />
      <CarGallery />
    </section>
  );
};

export { MainPage };
