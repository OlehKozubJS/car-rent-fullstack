import { useState, useEffect } from "react";

import cars from "./advertsCars.json";

import { CarFilter, CarFilterOptionsMenu } from "./components/CarFilter";
import { CarModal } from "./components/CarModal";
import { CarGallery } from "./components/CarGallery";

const App = () => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const [isAnything, setIsAnything] = useState(false);

  const open = () => {
    setIsAnything(true);
  };

  const close = () => {
    setIsAnything(false);
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
      <button type="button" onClick={isAnything ? close : open}>
        {isAnything ? "Close" : "Open"}
      </button>
      {isAnything && (
        <>
          <button onClick={openModal}>Open Modal</button>
          {isModal && <CarModal carId={9582} onClose={closeModal} />}
          {String(date)}
          <CarGallery />
          <CarFilter />
        </>
      )}
      <CarFilterOptionsMenu />
    </div>
  );
};

export { App };
