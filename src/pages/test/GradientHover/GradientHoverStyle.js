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

export {
  GradientHoverTestComponentStyleBase,
  GradientHoverGradientComponentStyleBase,
};
