import { useState, useEffect } from "react";

const SquaresTest = () => {
  const [squares, setSquares] = useState([]);

  const getSquare = () => {
    if (squares.length < 10) {
      setSquares([...squares, Math.pow(squares.length, 2)]);
    }
  };

  useEffect(getSquare, [squares]);

  return <p>{squares.join(", ")}</p>;
};

export { SquaresTest };
