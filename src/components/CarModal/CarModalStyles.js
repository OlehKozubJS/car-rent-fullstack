import styled from "@emotion/styled";

const CarModalImageStyleBase = styled.img`
  border-radius: 12px;
  width: 100%;
`;

const CarModalItemsStyleBase = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 4px;
`;

const CarModalItemStyleBase = styled.li`
  font-size: 12px;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);

  font-family: "Manrope-Regular", sans-serif;
`;

const CarModalItemValueStyleBase = styled.span`
  color: #3470ff;
`;

const CarModalSubHeaderStyleBase = styled.h4`
  color: #121417;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;

  font-family: "Manrope-Medium", sans-serif;
`;

export {
  CarModalImageStyleBase,
  CarModalItemsStyleBase,
  CarModalItemStyleBase,
  CarModalItemValueStyleBase,
  CarModalSubHeaderStyleBase,
};
