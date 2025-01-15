import { useState, useEffect } from "react";

import { GradientHoverTestComponentStyleBase } from "./GradientHoverStyle";

const GradientHoverTestComponentStyleBase = styled.div`
  height: 250px;
  width: 400px;

  background-color: black;
  color: white;

  &:hover {
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
        ${({ gradientleft }) => {
          return gradientleft;
        }}px,
      rgba(255, 255, 255, 1)
        ${({ gradientleft }) => {
          return gradientleft + 20;
        }}px,
      rgba(255, 255, 255, 1)
        ${({ gradientleft }) => {
          return gradientleft + 30;
        }}px,
      rgba(255, 255, 255, 0)
        ${({ gradientleft }) => {
          return gradientleft + 50;
        }}px
    );
  }
`;

const GradientHover = () => {
  const handleMouseOver = () => {};

  return (
    <div>
      <GradientHoverTestComponentStyleBase
        gradientleft={30}
        onMouseOver={handleMouseOver}
      >
        Gradient hover
      </GradientHoverTestComponentStyleBase>
    </div>
  );
};

export { GradientHover };
