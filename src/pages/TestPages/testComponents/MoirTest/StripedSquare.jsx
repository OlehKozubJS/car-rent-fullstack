import { useState, useEffect } from "react";

import { useMultiple } from "../imports";

import styled from "@emotion/styled";

const SquareStyleBase = styled.div`
  position: absolute;

  top: ${({ top }) => {
    return top;
  }}px;

  left: ${({ left }) => {
    return left;
  }}px;

  transform: rotate(
    ${({ angle }) => {
      return angle;
    }}deg
  );

  height: ${({ height }) => {
    return height;
  }}px;

  width: ${({ width }) => {
    return width;
  }}px;

  display: flex;
  flex-direction: column;
`;

const StripeStyleBase = styled.div`
  height: 5px;

  width: ${({ width }) => {
    return width;
  }}px;

  background: ${({ color }) => {
    return color;
  }};
`;

const StripedSquare = ({ height, width, top, left, angle }) => {
  const [stripes, setStripes] = useState([]);

  let newStripes = [];

  useMultiple(height / 5, 1, (number) => {
    newStripes = [
      ...newStripes,
      <StripeStyleBase
        key={i + 1}
        color={i % 2 === 0 ? "rgba(0, 0, 250, 0.5)" : "none"}
        width={100}
      ></StripeStyleBase>,
    ];
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
