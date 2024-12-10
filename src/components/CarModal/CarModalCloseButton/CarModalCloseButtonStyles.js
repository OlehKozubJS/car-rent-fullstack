import styled from "@emotion/styled";

const CarModalCloseButtonContainerStyleBase = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CarModalCloseButtonStyleBase = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  height: 24px;
  width: 24px;

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
