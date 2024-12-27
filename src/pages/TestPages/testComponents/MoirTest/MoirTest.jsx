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

  useEffect(
    useKeyboard("w", () => {
      setTop(top - 5);
    }),
    [top]
  );
  useEffect(
    useKeyboard("s", () => {
      setTop(top + 5);
    }),
    [top]
  );
  useEffect(
    useKeyboard("a", () => {
      setLeft(left - 5);
    }),
    [left]
  );
  useEffect(
    useKeyboard("d", () => {
      setLeft(left + 5);
    }),
    [left]
  );
  useEffect(
    useKeyboard("q", () => {
      setAngle(angle - 5);
    }),
    [angle]
  );
  useEffect(
    useKeyboard("e", () => {
      setAngle(angle + 5);
    }),
    [angle]
  );

  return (
    <MoirTestStyleBase>
      <StripedSquare
        top={top}
        left={left}
        angle={angle}
        height={500}
        width={500}
      />
      <StripedSquare top={0} left={0} angle={0} height={500} width={1000} />
      <div>{top}</div>
      <div>{left}</div>
      <div>{angle}</div>
    </MoirTestStyleBase>
  );
};

export { MoirTest };
