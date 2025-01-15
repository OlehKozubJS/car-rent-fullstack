import styled from "styled-components";

const GradientHoverTestComponentStyleBase = styled.div`
  bachground-color: black;
  color: white;
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
