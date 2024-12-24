import { useState, useEffect } from "react";

import { handleInterval } from "./imports";

const DateAndTimeTest = () => {
  const [time, setTime] = useState(0);

  const [date, setDate] = useState(new Date());

  const dateAnimationFunction = () => {
    setDate(new Date());
  };

  const timeAnimationFunctionOne = () => {
    setTime(time + 1);
  };

  useEffect(handleInterval(dateAnimationFunction, 1000), []);

  useEffect(handleInterval(timeAnimationFunctionOne, 500), [time]);

  return (
    <div>
      {String(date)}
      <p>{time}</p>
    </div>
  );
};

export default DateAndTimeTest;
