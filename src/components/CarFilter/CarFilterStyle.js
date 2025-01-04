import styled from "@emotion/styled";

const CarFilterContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 18px;
`;

const CarFilterHeader = styled.h3`
  font-family: "manrope-medium";
  font-size: 14px;
  line-height: 18px;
  color: rgba(138, 138, 137, 1);

  margin-bottom: 8px;
`;

const CarFilterSubmitButtonStyleBase = styled.button`
  margin-top: 28px;

  display: flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 12px;
  background-color: rgb(52, 112, 255);

  color: #fff;
  font-size: 14px;
  line-height: 20px;

  font-family: "Manrope-SemiBold", sans-serif;

  &:hover {
    background-color: rgb(11, 68, 205);
  }
`;

export { CarFilterContainer, CarFilterHeader, CarFilterSubmitButtonStyleBase };
