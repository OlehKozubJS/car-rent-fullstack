import { useState, useEffect } from "react";

import { handleTimeOut } from "./imports";

const FibonacciTest = () => {
  const [fibonacciArray, setFibonacciArray] = useState([0, 1]);

  const fibonacciTimeFunction = () => {
    if (fibonacciArray.length < 16) {
      setFibonacciArray([
        ...fibonacciArray,
        fibonacciArray[fibonacciArray.length - 1] +
          fibonacciArray[fibonacciArray.length - 2],
      ]);
    }
  };
  useEffect(handleTimeOut(fibonacciTimeFunction, 1000), [fibonacciArray]);

  return <p>{fibonacciArray.join(", ")}</p>;
};

export { FibonacciTest };
