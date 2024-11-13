import { useState, useEffect } from "react";

import cars from "./advertsCars.json";

import { CarFilter, CarGallery, CarModal } from "./components";

const TestPage = () => {
  const [time, setTime] = useState(0);

  const [fibonacciArray, setFibonacciArray] = useState([]);

  const [date, setDate] = useState(new Date());

  const dateAnimationFunction = () => {
    setDate(new Date());
  };

  const timeAnimationFunctionOne = () => {
    setTime(time + 1);
  };

  const fibpnacciTimeFunction = () => {
    setFibonacciArray();
  };

  const varNameToString = (objectName) => {
    return Object.keys(objectName)[0];
  };

  const handleInterval = (callback, timePeriod) => {
    return () => {
      let newAnimation = setInterval(callback, timePeriod);

      return () => {
        clearInterval(newAnimation);
      };
    };
  };

  const handleTimeOut = (callback, timePeriod) => {
    return () => {
      let newAnimation = setTimeout(callback, timePeriod);

      return () => {
        clearTimeout(newAnimation);
      };
    };
  };

  useEffect(handleInterval(dateAnimationFunction, 1000), []);

  useEffect(handleInterval(timeAnimationFunctionOne, 500), [time]);

  //useEffect(handleTimeOut(dateAnimationFunctionTwo, 5000), [time]);

  return (
    <div>
      {String(date)}
      <p>{time}</p>
      <p>{""}</p>
      <p>{""}</p>
    </div>
  );
};

export { TestPage };
