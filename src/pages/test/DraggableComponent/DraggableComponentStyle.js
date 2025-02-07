import styled from "@emotion/styled";

const DraggableComponentStyle = styled.div`
  position: absolute;

  top: ${({ top }) => {
    return top;
  }}px;

  left: ${({ left }) => {
    return left;
  }}px;

  width: ${({ width }) => {
    return width;
  }}px;

  height: ${({ height }) => {
    return height;
  }}px;

  background-color: ${({ backgroundColor }) => {
    return backgroundColor;
  }};
`;

export { DraggableComponentStyle };
