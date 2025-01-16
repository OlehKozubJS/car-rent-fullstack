import styled from "styled-components";

const GradientHoverTestComponentStyleBase = styled.div`
  height: 150px;
  width: 800px;

  background-color: black;
  color: white;

  position: relative;
`;

const GradientHoverGradientComponentStyleBase = styled.div`
  position: absolute;

  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;

  background: none;
  color: white;
  background-image: ${({ backgroundimage }) => {
    return backgroundimage;
  }};
`;

export {
  GradientHoverTestComponentStyleBase,
  GradientHoverGradientComponentStyleBase,
};
