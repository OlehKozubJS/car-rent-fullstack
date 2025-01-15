import styled from "styled-components";

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
