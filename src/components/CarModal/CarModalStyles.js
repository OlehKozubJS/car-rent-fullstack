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
  CarModalBackdropStyleBase,
  CarModalContainerStyleBase,
  CarModalImageStyleBase,
  CarModalItemsStyleBase,
  CarModalItemStyleBase,
  CarModalItemValueStyleBase,
  CarModalSubHeaderStyleBase,
};
