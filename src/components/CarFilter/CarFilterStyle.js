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

export { CarFilterContainer, CarFilterHeader };
