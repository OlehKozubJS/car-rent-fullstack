import styled from "styled-components";

const GradientHoverTestComponentStyleBase = styled.div`
  &:root {
    --gradient-left: 30px;
  }

  height: 250px;
  width: 400px;

  background-color: black;
  color: white;

  &:hover {
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0) var(--gradient-left),
      rgba(255, 255, 255, 1) 45px,
      rgba(255, 255, 255, 1) 50px,
      rgba(255, 255, 255, 0) 65px
    );
  }
`;

const GradientHover = () => {
  return (
    <div>
      <GradientHoverTestComponentStyleBase>
        Gradient hover
      </GradientHoverTestComponentStyleBase>
    </div>
  );
};

export { GradientHover };
