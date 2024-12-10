import styled from "@emotion/styled";

const CarModalCloseButtonContainerStyleBase = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CarModalCloseButtonStyleBase = styled.button`
  border: none;
  outline: none;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  background: none;

  &:hover {
    background: #0b44cd;
  }
`;

export { CarModalCloseButtonContainerStyleBase, CarModalCloseButtonStyleBase };
