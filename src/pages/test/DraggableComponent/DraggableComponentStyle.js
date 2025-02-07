import styled from "@emotion/styled";

const DraggableComponentStyle = styled.div`
  position: absolute;

  top: ${({ top }) => {
    return top;
  }}px;

  left: ${({ left }) => {
    return left;
  }}px;

  height: ${({ height }) => {
    return height;
  }}px;

  width: ${({ width }) => {
    return width;
  }}px;

  background-color: ${({ backgroundColor }) => {
    return backgroundColor;
  }};
`;

export { DraggableComponentStyle };
