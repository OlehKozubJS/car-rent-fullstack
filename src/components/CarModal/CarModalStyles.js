import styled from "@emotion/styled";

const CarModalImageStyleBase = styled.img`
  border-radius: 12px;
  width: 100%;
`;

const CarModalItemsStyleBase = styled.ul`
  margin-top: 8px;

  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
`;

const CarModalItemStyleBase = styled.li`
  font-size: 12px;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);

  font-family: "Manrope-Regular", sans-serif;
`;

const CarModalItemValueStyleBase = styled.span`
  color: rgb(52, 112, 255);
`;

const CarModalSubHeaderStyleBase = styled.h4`
  font-family: "Manrope-Medium", sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #121417;

  margin-bottom: 8px;
`;

export {
  CarModalImageStyleBase,
  CarModalItemsStyleBase,
  CarModalItemStyleBase,
  CarModalItemValueStyleBase,
  CarModalSubHeaderStyleBase,
};
