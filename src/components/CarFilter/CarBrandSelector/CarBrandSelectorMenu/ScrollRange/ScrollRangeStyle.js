import styled from "@emotion/styled";

const ScrollRangeStatorStyleBase = styled.div`
  width: 8px;
  height: ${({ height }) => {
    return height;
  }}px;

  position: relative;
`;

const ScrollRangeRotorStyleBase = styled.div`
  position: absolute;

  width: 8px;
  height: ${({ height }) => {
    return height;
  }}px;
  top: ${({ top }) => {
    return top;
  }}px;
  right: 0px;

  background-color: rgba(18, 20, 23, 0.05);

  border-radius: 10px;

  &:hover {
    transition: 500ms;
    background-color: rgba(18, 20, 23, 0.5);
  }

  &:active {
    background-color: rgba(18, 20, 23, 0.25);
  }
`;

export { ScrollRangeStatorStyleBase, ScrollRangeRotorStyleBase };
