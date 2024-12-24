import { useState, useEffect } from "react";

import {
  cars,
  handleEventListener,
  handleInterval,
  handleTimeOut,
  CarFilter,
  CarGallery,
  CarModal,
  vanillaReducer,
} from "./imports";

const PrimeNumbersTest = () => {
  const [primeNumbersArray, setPrimeNumbersArray] = useState([2]);

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

  useEffect(handleInterval(primeNumbersFunction, 1000), [primeNumbersArray]);

  return <p>{primeNumbersArray.join(", ")}</p>;
};

export default TestPageOne;
