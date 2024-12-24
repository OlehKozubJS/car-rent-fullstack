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
  SVGimage,
} from "./imports";

const TestPageOne = () => {
  const [time, setTime] = useState(0);

  const [date, setDate] = useState(new Date());

  const dateAnimationFunction = () => {
    setDate(new Date());
  };

  const timeAnimationFunctionOne = () => {
    setTime(time + 1);
  };

  const varNameToString = (objectName) => {
    return Object.keys(objectName)[0];
  };

  useEffect(handleInterval(dateAnimationFunction, 1000), []);

  useEffect(handleInterval(timeAnimationFunctionOne, 500), [time]);

  const [squares, setSquares] = useState([]);

  const getSquare = () => {
    if (squares.length < 10) {
      setSquares([...squares, Math.pow(squares.length, 2)]);
    }
  };

  useEffect(getSquare, [squares]);

  return (
    <div>
      {String(date)}
      <p>{time}</p>

      <p>{squares.join(", ")}</p>

      <span style={{ fontFamily: "manrope-regular" }}>Regular</span>
      <span style={{ fontFamily: "manrope-medium" }}>Medium</span>
      <span style={{ fontFamily: "manrope-semibold" }}>Semibold</span>
      <span style={{ fontFamily: "montserrat-regular" }}>Regular</span>
      <span style={{ fontFamily: "montserrat-semibold" }}>Semibold</span>
      <div style={{ backgroundColor: "black" }}>
        <SVGimage name="fav" />
      </div>
    </div>
  );
};

export default TestPageOne;
