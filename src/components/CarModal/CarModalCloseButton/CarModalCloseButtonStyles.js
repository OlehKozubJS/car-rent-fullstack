import styled from "@emotion/styled";

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

export { CarModalCloseButtonStyleBase };
