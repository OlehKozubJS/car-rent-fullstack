import { useState, useEffect } from "react";

import styled from "@emotion/styled";

const SquareStyleBase = styled.div`
  position: absolute;
  top: 100px;
  left: 150px;

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

const StripedSquare = () => {
  const [stripes, setStripes] = useState([]);

  useEffect(() => {
    if (stripes.length >= 25) {
      return;
    }

    setStripes([
      ...stripes,
      <StripeStyleBase
        key={stripes.length + 1}
        color={stripes.length % 2 === 0 ? "blue" : "none"}
      ></StripeStyleBase>,
    ]);
  }, [stripes]);

  return <SquareStyleBase>{stripes}</SquareStyleBase>;
};

export { StripedSquare };
