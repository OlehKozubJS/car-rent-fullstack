import styled from "@emotion/styled";

const ScrollRangeStatorStyleBase = styled.div`
  width: 8px;

  position: relative;
`;

const ScrollRangeRotorStyleBase = styled.div`
  position: absolute;
  width: 8px;
  right: 0px;

  background-color: rgba(18, 20, 23, 0.05);

  border-radius: 10px;

  transition: 500ms;

  &:hover {
    background-color: rgba(18, 20, 23, 0.5);
  }

  &:active {
    background-color: rgba(18, 20, 23, 0.25);
  }
`;

export { ScrollRangeStatorStyleBase, ScrollRangeRotorStyleBase };
