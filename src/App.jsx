import { useState, useEffect } from "react";

import cars from "./advertsCars.json";

import { CarFilter, CarGallery, CarModal } from "./components";

import { CarRentStyles } from "./CarRentStyles";

const App = () => {
  const [isModal, setIsModal] = useState(false);
  const [timeOne, setTimeOne] = useState(0);
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

  const dateAnimationFunctionOne = () => {
    setTimeOne(timeOne + 1);
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

  useEffect(handleInterval(dateAnimationFunction, 1000), []);

  useEffect(handleInterval(dateAnimationFunctionOne, 500), [timeOne]);
  useEffect(handleInterval(dateAnimationFunctionTwo, 1000), [timeTwo]);
  useEffect(handleInterval(dateAnimationFunctionThree, 2000), [timeThree]);

  return (
    <div>
      <CarRentStyles />
      <button onClick={openModal}>Open Modal</button>
      {isModal && <CarModal carId={9582} onClose={closeModal} />}
      {String(date)}
      <CarGallery />
      <CarFilter />
      <p>{timeOne}</p>
      <p>{timeTwo}</p>
      <p>{timeThree}</p>
    </div>
  );
};

export { App };
