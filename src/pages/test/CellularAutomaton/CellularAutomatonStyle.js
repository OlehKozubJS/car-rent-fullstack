import styled from "@emotion/styled";

const CellularFieldStyleBase = styled.div`
  height: 500px;
  width: 500px;

  border-style: solid;
  border-width: 1px;
  border-color: rgb(0, 0, 0);

  display: flex;
  flex-wrap: wrap;
`;

const CellStyleBase = styled.div`
  box-sizing: border-box;
  height: 10px;
  width: 10px;

  border-style: solid;
  border-width: 1px;
  border-color: rgb(0, 0, 0);
`;

export { CellularFieldStyleBase, CellStyleBase };
