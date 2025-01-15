import styled from "styled-components";

const GradientHoverTestComponentStyleBase = styled.div`
  height: 250px;
  width: 400px;

  background-color: black;
  color: white;

  &:hover {
    background-image: linear-gradient(
      to right,
      black,
      white 10px,
      white 25px,
      black 35px
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
