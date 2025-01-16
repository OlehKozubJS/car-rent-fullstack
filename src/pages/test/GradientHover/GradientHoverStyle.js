import styled from "styled-components";

const GradientHoverStyleBase = styled.div`
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

export { GradientHoverStyleBase };
