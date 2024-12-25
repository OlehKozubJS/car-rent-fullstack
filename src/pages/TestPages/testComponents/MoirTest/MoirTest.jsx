import { useState, useEffect } from "react";

import styled from "@emotion/styled";

import { StripedSquare } from "./StripedSquare";

const MoirTestStyleBase = styled.div`
  postion: relative;
`;

const MoirTest = () => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  return (
    <MoirTestStyleBase>
      <StripedSquare top={top} left={left} />
      <StripedSquare top={500} left={500} />
    </MoirTestStyleBase>
  );
};

export { MoirTest };
