import { useState, useEffect } from "react";

import cars from "./advertsCars.json";

import { CarFilter, CarGallery, CarModal } from "./components";

import { CarRentStyles } from "./CarRentStyles";

const App = () => {
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
    </div>
  );
};

export { App };
