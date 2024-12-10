import styled from "@emotion/styled";

const CarModalImageStyleBase = styled.img`
  display: block;
  height: 314px;
  border-radius: 12px;
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
