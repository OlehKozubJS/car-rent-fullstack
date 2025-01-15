import styled from "styled-components";

const GradientHoverTestComponentStyleBase = styled.div`
  height: 250px;
  width: 400px;

  background-color: black;
  color: white;

  position: relative;
`;

const GradientHoverGradientComponentStyleBase = styled.div`
  position: absolute;

  top: 0px;
  left: 0px;
  height: inherit;
  width: inherit;

  background: none;
  color: white;
`;
const setLinearGradient = (gradientLeft) => {
  `background-image: linear-gradient(
    to right,
  rgba(255, 255, 255, 0),
  rgba(255, 255, 255, 0)
    ${rgradientLeft}px,
  rgba(255, 255, 255, 1)
    ${gradientLeft}px,
  rgba(255, 255, 255, 1)
    ${gradientLeft}px,
  rgba(255, 255, 255, 0)
    ${gradientLeft}px
  );`;
};

export {
  GradientHoverTestComponentStyleBase,
  GradientHoverGradientComponentStyleBase,
};
