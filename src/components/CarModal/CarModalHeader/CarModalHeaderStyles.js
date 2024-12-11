import styled from "@emotion/styled";

const CarModalHeaderStyleBaseOne = styled.h3`
  margin-top: 14px;

  font-family: "Manrope-Regular";
  font-size: 18px;
  line-height: 24px;
  color: #121417;
`;

const CarModalHeaderStyleBaseTwo = styled.h3`
  margin-top: 14px;

  font-family: ${({ font }) => {
    return font;
  }};
  font-size: 18px;
  line-height: 24px;
  color: #121417;
`;

const CarModalHeaderStyleBaseThree = styled.h3`
  margin-top: 14px;

  font-family: "Manrope-SemiBold";
  font-size: 18px;
  line-height: 24px;
  color: #121417;
`;

export {
  CarModalHeaderStyleBaseOne,
  CarModalHeaderStyleBaseTwo,
  CarModalHeaderStyleBaseThree,
};
