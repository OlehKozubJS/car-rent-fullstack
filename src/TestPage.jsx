import { useState, useEffect } from "react";

import { cars } from "./data_base";

import { handleEventListener, handleInterval, handleTimeOut } from "./hooks";

import { CarFilter, CarGallery, CarModal } from "./components";

const TestPage = () => {
  const [isTestPage, setIsTestPage] = useState(false);

  const [time, setTime] = useState(0);

  const [fibonacciArray, setFibonacciArray] = useState([0, 1]);

  const [date, setDate] = useState(new Date());

  const openTestPage = () => {
    setIsTestPage(true);
  };

  const closeTestPage = () => {
    setIsTestPage(false);
  };

  const dateAnimationFunction = () => {
    setDate(new Date());
  };

  const timeAnimationFunctionOne = () => {
    setTime(time + 1);
  };

  const fibonacciTimeFunction = () => {
    if (fibonacciArray.length === 20) {
      return;
    }
    setFibonacciArray([
      ...fibonacciArray,
      fibonacciArray[fibonacciArray.length - 1] +
        fibonacciArray[fibonacciArray.length - 2],
    ]);
  };

  const varNameToString = (objectName) => {
    return Object.keys(objectName)[0];
  };

  useEffect(handleInterval(dateAnimationFunction, 1000), []);

  useEffect(handleInterval(timeAnimationFunctionOne, 500), [time]);

  useEffect(handleTimeOut(fibonacciTimeFunction, 1000), [fibonacciArray]);

  return isTestPage ? (
    <div>
      <button type="button" onClick={closeTestPage}>
        Close test page
      </button>
      {String(date)}
      <p>{time}</p>
      <p>{fibonacciArray.join(", ")}</p>
      <p>{""}</p>
    </div>
  ) : (
    <button type="button" onClick={openTestPage}>
      Open test page
    </button>
  );
};

export { TestPage };
