import { useState, useEffect } from "react";

import { useMultiple } from "../imports";

import styled from "./StripedSquareStyle";

const StripedSquare = ({ height, width, top, left, angle }) => {
  let newStripes = [];

  useMultiple(height / 5, 1, (number) => {
    setNewStripes([
      ...newStripes,
      <StripeStyleBase
        key={number + 1}
        color={number % 2 === 0 ? "rgba(0, 0, 250, 0.5)" : "none"}
        width={width}
      ></StripeStyleBase>,
    ]);
  });

  return (
    <SquareStyleBase
      top={top}
      left={left}
      angle={angle}
      height={height}
      width={width}
    >
      {newStripes}
    </SquareStyleBase>
  );
};

export { StripedSquare };
