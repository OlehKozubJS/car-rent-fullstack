import styled from "@emotion/styled";

import { StripedSquare } from "./StripedSquare";

const MoirTestStyleBase = styled.div`
  postion: relative;
`;

const MoirTest = () => {
  return (
    <div>
      <StripedSquare />
    </div>
  );
};

export { MoirTest };
