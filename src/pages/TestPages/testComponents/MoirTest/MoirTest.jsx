import { useState, useEffect } from "react";

import { StripedSquare } from "./StripedSquare";

const MoirTestStyleBase = styled.div`
  position: relative;
`;

import { useKeyboard } from "../imports";

import styled from "@emotion/styled";

const MoirTest = () => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [angle, setAngle] = useState(0);

  useEffect(useKeyboard(setTop(top - 5), "w"), [top]);
  useEffect(useKeyboard(setTop(top + 5), "s"), [top]);
  useEffect(useKeyboard(setLeft(left - 5), "a"), [left]);
  useEffect(useKeyboard(setLeft(left - 5), "a"), [left]);
  useEffect(useKeyboard(setAngle(angle - 5), "q"), [angle]);
  useEffect(useKeyboard(setAngle(angle + 5), "e"), [angle]);

  return (
    <MoirTestStyleBase>
      <StripedSquare
        top={top}
        left={left}
        angle={angle}
        height={100}
        width={100}
      />
      <StripedSquare top={0} left={0} angle={0} height={500} width={1000} />
    </MoirTestStyleBase>
  );
};

export { MoirTest };
