import styled from "@emotion/styled";

const CellularFieldStyleBase = styled.div`
  box-sizing: content-box;
  height: 1000px;
  width: 1000px;

  border-style: solid;
  border-width: 1px;
  border-color: rgb(0, 0, 0);

  display: flex;
  flex-wrap: wrap;
`;

const CellStyleBase = styled.div`
  height: 20px;
  width: 20px;

  border-style: solid;
  border-width: 1px;
  border-color: rgb(0, 0, 0);

  font-size: 9px;
  color: ${({ isActive }) => {
    isActive ? "rgb()" : "rgb()";
  }};
`;

export { CellularFieldStyleBase, CellStyleBase };
