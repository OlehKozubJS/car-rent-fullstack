import { useState, useEffect } from "react";

import styled from "@emotion/styled";

const SquareStyleBase = styled.div``;

const StripeStyleBase = styled.div``;

const StripedSquare = () => {
  const [stripes, setStripes] = useState([]);

  useEffect(() => {
    if (stripes.length >= 10) {
      return;
    }

    setStripes([
      ...stripes,
      <div key={stripes.length + 1}>Stripe {stripes.length + 1}</div>,
    ]);
  }, [stripes]);

  return <div>{stripes}</div>;
};

export { StripedSquare };
