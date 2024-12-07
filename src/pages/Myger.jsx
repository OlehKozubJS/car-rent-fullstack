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



    //onSubmit({ make, minRentalPrice, maxRentalPrice, minMileage, maxMileage });
  };

  return isTestPage ? (
    <div>
      <button type="button" onClick={closeTestPage}>
        Close test page
      </button>
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
