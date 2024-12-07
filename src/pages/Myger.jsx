import { useState, useEffect } from "react";

import { carsLocalData } from "./imports";

const TestPage = () => {
  const [isTestPage, setIsTestPage] = useState(false);

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
    if (fibonacciArray.length < 16) {
      setFibonacciArray([
        ...fibonacciArray,
        fibonacciArray[fibonacciArray.length - 1] +
          fibonacciArray[fibonacciArray.length - 2],
      ]);
    }
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
          newPrimeNumber / primeNumber !==
          Math.floor(newPrimeNumber / primeNumber)
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

  const [squares, setSquares] = useState([]);

  const getSquare = () => {
    if (squares.length < 10) {
      setSquares([...squares, Math.pow(squares.length, 2)]);
    }
  };

  useEffect(getSquare, [squares]);

  let make = "";
  let minRentalPrice = 0;
  let maxRentalPrice = 0;
  let minMileage = 0;
  let maxMileage = 0;

  const handler = (event) => {
    return event.target.value;
  };

  const handleMake = (event) => {
    make = handler(event);
  };

  const handleMinimalRentalPrice = (event) => {
    minRentalPrice = handler(event);
  };

  const handleMaximalRentalPrice = (event) => {
    maxRentalPrice = handler(event);
  };

  const handleMinimalMileage = (event) => {
    minMileage = handler(event);
  };

  const handleMaximalMileage = (event) => {
    maxMileage = handler(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //onSubmit({ make, minRentalPrice, maxRentalPrice, minMileage, maxMileage });
  };

  return isTestPage ? (
    <div>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  ) : (
    <button type="button" onClick={openTestPage}>
      Open test page
    </button>
  );
};

export { TestPage };
