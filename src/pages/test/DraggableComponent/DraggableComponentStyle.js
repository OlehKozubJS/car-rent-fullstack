import styled from "@emotion/styled";

const DraggableComponentStyle = styled.div`
  position: absolute;
  top: ${({ top }) => {
    return top;
  }}px;
  left: ${({ left }) => {
    return left;
  }}px;
  width: 50px;
  height: 50px;
  background-color: rgb(100, 100, 250);
`;

export { DraggableComponentStyle };
