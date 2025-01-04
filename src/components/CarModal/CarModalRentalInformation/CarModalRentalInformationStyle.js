import styled from "@emotion/styled";

const CarModalRentalItemsStyleBase = styled.ul`
  margin-top: 8px;

  display: flex;
  flex-wrap: wrap;
  column-gap: 4px;
  row-gap: 8px;
`;

const CarModalRentalItemStyleBase = styled.li`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 35px;
  background: #f9f9f9;

  color: #363535;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.24px;

  font-family: "Montserrat-Regular", sans-serif;
`;

const CarModalRentalItemValueStyleBase = styled.span`
  color: #3470ff;
  font-family: "Montserrat-SemiBold", sans-serif;
`;

export {
  CarModalRentalItemsStyleBase,
  CarModalRentalItemStyleBase,
  CarModalRentalItemValueStyleBase,
};
