import { useState, useEffect } from "react";

import { StripedSquare } from "./StripedSquare";

const MoirTestStyleBase = styled.div`
  position: relative;
`;

import {} from ".";

import styled from "@emotion/styled";

const MoirTest = () => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const changeTop = (event) => {
      if (event.type === "keydown" && event.key === "w") {
        setTop(top - 5);
      }
      if (event.type === "keydown" && event.key === "s") {
        setTop(top + 5);
      }
    };

    window.addEventListener("keydown", changeTop);

    return () => {
      window.removeEventListener("keydown", changeTop);
    };
  }, [top]);

  useEffect(() => {
    const changeLeft = (event) => {
      if (event.type === "keydown" && event.key === "a") {
        setLeft(left - 5);
      }
      if (event.type === "keydown" && event.key === "d") {
        setLeft(left + 5);
      }
    };

    window.addEventListener("keydown", changeLeft);

    return () => {
      window.removeEventListener("keydown", changeLeft);
    };
  }, [left]);

  useEffect(() => {
    const changeAngle = (event) => {
      if (event.type === "keydown" && event.key === "q") {
        setAngle(angle - 5);
      }
      if (event.type === "keydown" && event.key === "e") {
        setAngle(angle + 5);
      }
    };

    window.addEventListener("keydown", changeAngle);

    return () => {
      window.removeEventListener("keydown", changeAngle);
    };
  }, [angle]);

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
