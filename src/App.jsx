import { useState, useEffect } from "react";

import cars from "./advertsCars.json";

import { CarFilter, CarGallery, CarModal } from "./components";

import { CarRentStyles } from "./CarRentStyles";

const App = () => {
  const [isModal, setIsModal] = useState(false);
  const [timeTwo, setTimeTwo] = useState(0);
  const [timeThree, setTimeThree] = useState(0);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const [date, setDate] = useState(new Date());

  const dateAnimationFunction = () => {
    setDate(new Date());
  };

  const dateAnimationFunctionTwo = () => {
    setTimeTwo(timeTwo + 1);
  };

  const dateAnimationFunctionThree = () => {
    setTimeThree(timeThree + 1);
  };

  const handleInterval = (callback, timePeriod) => {
    return () => {
      let newAnimation = setInterval(callback, timePeriod);

      return () => {
        clearInterval(newAnimation);
      };
    };
  };

  useEffect(handleInterval(dateAnimationFunctionTwo, 2000), []);

  useEffect(handleInterval(dateAnimationFunction, 1000), []);

  useEffect(handleInterval(dateAnimationFunctionThree, 500), []);

  return (
    <div>
      <CarRentStyles />
      <button onClick={openModal}>Open Modal</button>
      {isModal && <CarModal carId={9582} onClose={closeModal} />}
      {String(date)}
      <CarGallery />
      <CarFilter />
      <p>{timeTwo}</p>
      <p>{timeThree}</p>
    </div>
  );
};

export { App };
