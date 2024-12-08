import styled from "@emotion/styled";

const CarModalBackdropStyleBase = styled.div`
  position: absolute;
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
  box-sizing: border-box;
  max-width: 50%;
  height: 100%;
  padding: 15px 37px 40px 45px;
  border-radius: 24px;
  background: #fff;
`;

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

const CarModalCloseButtonIconStyleBase = styled.svg`
  display: block;
`;

const CarModalImageStyleBase = styled.img`
  display: block;
  height: 314px;
  border-radius: 12px;
`;

const CarModalHeaderStyleBase = styled.h3`
  color: #121417;
  font-size: 18px;
  line-height: 24px;

  font-family: "Manrope-Medium", sans-serif;
`;

const CarModalItemsStyleBase = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  column-gap: 4px;
`;

const CarModalItemStyleBase = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 18px;

  font-family: "Manrope-Regular", sans-serif;
`;

const CarModalItemValueStyleBase = styled.span`
  color: #3470ff;
`;

const CarModalDescriptionStyleBase = styled.p`
  color: #121417;
  font-size: 14px;
  line-height: 20px;

  font-family: "Manrope-Regular", sans-serif;
`;

const CarModalSubHeaderStyleBase = styled.h4`
  color: #121417;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;

  font-family: "Manrope-Medium", sans-serif;
`;

const CarModalRentalItemsStyleBase = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
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

const CarModalSubmitButtonStyleBase = styled.button`
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
  CarModalCloseButtonContainerStyleBase,
  CarModalCloseButtonStyleBase,
  CarModalCloseButtonIconStyleBase,
  CarModalImageStyleBase,
  CarModalHeaderStyleBase,
  CarModalItemsStyleBase,
  CarModalItemStyleBase,
  CarModalItemValueStyleBase,
  CarModalDescriptionStyleBase,
  CarModalSubHeaderStyleBase,
  CarModalRentalItemsStyleBase,
  CarModalRentalItemStyleBase,
  CarModalRentalItemValueStyleBase,
  CarModalSubmitButtonStyleBase,
};
