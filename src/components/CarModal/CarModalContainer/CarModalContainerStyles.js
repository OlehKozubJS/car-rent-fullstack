import styled from "@emotion/styled";

const CarModalBackdropStyleBase = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(18, 20, 23, 0.5);
`;

const CarModalContainerStyleBase = styled.article`
  position: relative;
  width: 541px;
  padding: 40px;

  border-radius: 24px;
  background: #fff;
`;

export { CarModalBackdropStyleBase, CarModalContainerStyleBase };
