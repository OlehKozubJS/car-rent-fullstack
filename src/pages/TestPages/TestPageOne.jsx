import { useState, useEffect } from "react";

import { SVGimage } from "./imports";

const TestPageOne = () => {
  const varNameToString = (objectName) => {
    return Object.keys(objectName)[0];
  };

  const [squares, setSquares] = useState([]);

  const getSquare = () => {
    if (squares.length < 10) {
      setSquares([...squares, Math.pow(squares.length, 2)]);
    }
  };

  useEffect(getSquare, [squares]);

  return (
    <div>
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
