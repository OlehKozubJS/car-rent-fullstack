import styled from "@emotion/styled";

const CarModalLinkStyleBase = styled.a`
  margin-top: 24px;

  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 12px;
  background: #3470ff;

  color: #fff;
  font-size: 14px;
  line-height: 20px;

  font-family: "Manrope-SemiBold", sans-serif;

  &:hover {
    background: #0b44cd;
  }
`;

export {
  CarModalBackdropStyleBase,
  CarModalContainerStyleBase,
  CarModalImageStyleBase,
  CarModalItemsStyleBase,
  CarModalItemStyleBase,
  CarModalItemValueStyleBase,
  CarModalSubHeaderStyleBase,
  CarModalRentalItemsStyleBase,
  CarModalRentalItemStyleBase,
  CarModalRentalItemValueStyleBase,
  CarModalLinkStyleBase,
};
