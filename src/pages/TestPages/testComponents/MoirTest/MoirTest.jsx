import { useState, useEffect } from "react";

import styled from "@emotion/styled";

import { StripedSquare } from "./StripedSquare";

const MoirTestStyleBase = styled.div`
  postion: relative;
`;

const MoirTest = () => {
  return (
    <MoirTestStyleBase>
      <StripedSquare top={300} left={300} />
      <StripedSquare top={500} left={500} />
    </MoirTestStyleBase>
  );
};

export { MoirTest };
