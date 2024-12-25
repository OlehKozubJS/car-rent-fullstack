import { useState, useEffect } from "react";

import styled from "@emotion/styled";

import { StripedSquare } from "./StripedSquare";

const MoirTestStyleBase = styled.div`
  postion: relative;
`;

const MoirTest = () => {
  const [top, setTop] = useState(200);
  const [left, setLeft] = useState(200);

  useEffect(() => {
    const increaseTop = (event) => {
      if (event.type === "keydown" && event.key === "w") {
        setTop(set + 10);
      }
    };

    window.addEventListener("keydown", increaseTop);

    return () => {
      window.removeEventListener("keydown", increaseTop);
    };
  }, []);

  useEffect((event) => {}, []);

  return (
    <MoirTestStyleBase>
      <StripedSquare top={top} left={left} />
      <StripedSquare top={300} left={300} />
    </MoirTestStyleBase>
  );
};

export { MoirTest };
