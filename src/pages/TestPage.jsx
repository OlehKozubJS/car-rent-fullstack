import { useState, useEffect } from "react";

import {
  cars,
  handleEventListener,
  handleInterval,
  handleTimeOut,
  CarFilter,
  CarGallery,
  CarModal,
} from "./imports";

const TestPage = () => {
  const [isTestPage, setIsTestPage] = useState(false);

  const [time, setTime] = useState(0);

  const [fibonacciArray, setFibonacciArray] = useState([0, 1]);

  const [primeNumbersArray, setPrimeNumbersArray] = useState([2]);

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

  const primeNumbersFunction = () => {
    let lastPrimeNumber = primeNumbersArray[primeNumbersArray.length - 1];

    if (lastPrimeNumber >= 100) {
      return;
    }

    let newPrimeNumber = lastPrimeNumber;

    while (true) {
      newPrimeNumber += 1;

      const isNoDivisors = primeNumbersArray.every(
        (primeNumber) =>
          newPrimeNumber / primeNumber -
            Math.floor(newPrimeNumber / primeNumber) !==
          0
      );

      if (isNoDivisors) {
        break;
      }
    }

    setPrimeNumbersArray([...primeNumbersArray, newPrimeNumber]);
  };

  const varNameToString = (objectName) => {
    return Object.keys(objectName)[0];
  };

  useEffect(handleInterval(dateAnimationFunction, 1000), []);

  useEffect(handleInterval(timeAnimationFunctionOne, 500), [time]);

  useEffect(handleTimeOut(fibonacciTimeFunction, 1000), [fibonacciArray]);

  useEffect(handleInterval(primeNumbersFunction, 1000), [primeNumbersArray]);

  return isTestPage ? (
    <div>
      <button type="button" onClick={closeTestPage}>
        Close test page
      </button>
      {String(date)}
      <p>{time}</p>
      <p>{fibonacciArray.join(", ")}</p>
      <p>{primeNumbersArray.join(", ")}</p>
    </div>
  ) : (
    <button type="button" onClick={openTestPage}>
      Open test page
    </button>
  );
};

export { TestPage };
