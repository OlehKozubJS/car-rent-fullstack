import { useState, useEffect } from "react";

import styled from "@emotion/styled";

const SquareStyleBase = styled.div`
  height: 250px;
  width: 250px;

  background-color: green;

  display: flex;
  flex-direction: column;
`;

const StripeStyleBase = styled.div`
  height: 250px;
  width: 10px;
  background-color: ${({ color }) => {
    return color;
  }};
`;

const StripedSquare = () => {
  const [stripes, setStripes] = useState([]);

  useEffect(() => {
    if (stripes.length >= 10) {
      return;
    }

    setStripes([
      ...stripes,
      <StripeStyleBase key={stripes.length + 1}>
        {stripes.length}
      </StripeStyleBase>,
    ]);
  }, [stripes]);

  return <SquareStyleBase>{stripes}</SquareStyleBase>;
};

export { StripedSquare };
