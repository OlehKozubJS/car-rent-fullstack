import { useState, useEffect } from "react";

import cars from "./advertsCars.json";

import { CarFilter, CarGallery, CarModal } from "./components";

const App = () => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const dateAnimationFunction = () => {
      setDate(new Date());
    };

    let dateAnimation = setInterval(dateAnimationFunction, 1000);

    return () => {
      clearInterval(dateAnimation);
    };
  }, []);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isModal && <CarModal carId={9582} onClose={closeModal} />}
      {String(date)}
      <CarGallery />
      <CarFilter />
    </div>
  );
};

export { App };
