import { useState, useEffect } from "react";

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

  height: ${(height) => {
    return height;
  }}px;

  width: ${(width) => {
    return width;
  }}px;

  display: flex;
  flex-direction: column;
`;

const StripeStyleBase = styled.div`
  height: 5px;
  width: 250px;
  background: ${({ color }) => {
    return color;
  }};
`;

const StripedSquare = ({ height, width, top, left, angle }) => {
  const [stripes, setStripes] = useState([]);

  useEffect(() => {
    if (stripes.length >= 50) {
      return;
    }

    setStripes([
      ...stripes,
      <StripeStyleBase
        key={stripes.length + 1}
        color={stripes.length % 2 === 0 ? "rgba(0, 0, 250, 0.5)" : "none"}
      ></StripeStyleBase>,
    ]);
  }, [stripes]);

  return (
    <SquareStyleBase
      top={top}
      left={left}
      angle={angle}
      height={height}
      width={width}
    >
      {stripes}
    </SquareStyleBase>
  );
};

export { StripedSquare };
