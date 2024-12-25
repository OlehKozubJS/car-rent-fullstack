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
    const changeTop = (event) => {
      if (event.type === "keydown" && event.key === "w") {
        setTop(top - 1);
      }
      if (event.type === "keydown" && event.key === "s") {
        setTop(top + 1);
      }
    };

    window.addEventListener("keydown", changeTop);

    return () => {
      window.removeEventListener("keydown", changeTop);
    };
  }, [top]);

  useEffect(() => {}, []);

  return (
    <MoirTestStyleBase>
      <StripedSquare top={top} left={left} />
      <StripedSquare top={300} left={300} />
    </MoirTestStyleBase>
  );
};

export { MoirTest };
