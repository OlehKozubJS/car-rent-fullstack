import { useState, useEffect } from "react";

import styled from "@emotion/styled";

import { StripedSquare } from "./StripedSquare";

const MoirTestStyleBase = styled.div`
  postion: relative;
`;

const MoirTest = () => {
  const [top, setTop] = useState(200);
  const [left, setLeft] = useState(200);
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
      <StripedSquare top={top} left={left} angle={angle} />
      <StripedSquare top={300} left={300} angle={90} height={500} width={500} />
    </MoirTestStyleBase>
  );
};

export { MoirTest };
