import { useState, useEffect } from "react";

import cars from "./advertsCars.json";

import { CarFilter, CarGallery, CarModal } from "./components";

const TestPage = () => {
  const [timeOne, setTimeOne] = useState(0);
  const [timeTwo, setTimeTwo] = useState(0);
  const [timeThree, setTimeThree] = useState(0);

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

  const varNameToString = (variableName) => {
    console.log(Object.entries({ variableName })[0]);
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

  return (
    <div>
      {String(date)}
      <p>{timeOne}</p>
      <p>{timeTwo}</p>
      <p>{timeThree}</p>
      <p>{varNameToString(timeOne)}</p>
      <p>{varNameToString(timeTwo)}</p>
      <p>{varNameToString(timeThree)}</p>
    </div>
  );
};

export { TestPage };
