import styled from "@emotion/styled";

const CellularFieldStyleBase = styled.div`
  box-sizing: content-box;
  height: 500px;
  width: 500px;

  border-style: solid;
  border-width: 1px;
  border-color: rgb(0, 0, 0);

  display: flex;
  flex-wrap: wrap;
`;

const CellStyleBase = styled.div`
  height: 10px;
  width: 10px;

  top: ${({ top }) => {
    return top;
  }}px;

  left: ${({ left }) => {
    return left;
  }}px;

  border-style: solid;
  border-width: 1px;
  border-color: rgb(0, 0, 0);

  background-color: ${({ isActive }) => {
    return (isActive && "rgb(0, 0, 0)") || "rgb(255, 255, 255)";
  }};

  font-size: 9px;

  color: ${({ isActive }) => {
    return (isActive && "rgb(255, 255, 255)") || "rgb(0, 0, 0)";
  }};
`;

export { CellularFieldStyleBase, CellStyleBase };
