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

  height: 250px;
  width: 250px;

  display: flex;
  flex-direction: column;
`;

const StripeStyleBase = styled.div`
  height: 10px;
  width: 250px;
  background: ${({ color }) => {
    return color;
  }};
`;

const StripedSquare = ({ top, left }) => {
  const [stripes, setStripes] = useState([]);

  useEffect(() => {
    if (stripes.length >= 25) {
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
    <SquareStyleBase top={top} left={left}>
      {stripes}
    </SquareStyleBase>
  );
};

export { StripedSquare };
