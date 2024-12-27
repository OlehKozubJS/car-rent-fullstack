import styled from "@emotion/styled";

const SquareStyleBase = styled.div`
  position: absolute;

  top: ${({ top }) => {
    return top;
  }}px;

  left: ${({ left }) => {
    return left;
  }}px;

  transform: rotate(
    ${({ angle }) => {
      return angle;
    }}deg
  );

  height: ${({ height }) => {
    return height;
  }}px;

  width: ${({ width }) => {
    return width;
  }}px;

  display: flex;
  flex-direction: column;
`;

const StripeStyleBase = styled.div`
  height: ${({ stripeHeight }) => {
    return stripeHeight;
  }}px;

  width: ${({ width }) => {
    return width;
  }}px;

  background: ${({ color }) => {
    return color;
  }};
`;

export { SquareStyleBase, StripeStyleBase };
