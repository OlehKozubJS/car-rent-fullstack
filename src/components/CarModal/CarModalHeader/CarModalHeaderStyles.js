import styled from "@emotion/styled";

const CarModalHeaderStyleBaseOne = styled.p`
  margin-top: 14px;

  font-family: "Manrope-Regular";
  font-size: 18px;
  line-height: 24px;
  color: #121417;
`;

const CarModalHeaderStyleBaseTwo = styled.p`
  margin-top: 14px;

  font-family: ${({ font }) => {
    return font;
  }};
  font-size: 18px;
  line-height: 24px;
  color: #121417;
`;

const CarModalHeaderStyleBaseThree = styled.p`
  margin-top: 14px;

  font-family: "Manrope-SemiBold";
  font-size: 18px;
  line-height: 24px;
  color: #121417;
  &:hover {
    font-family: "Manrope-Medium";
  }
`;

export {
  CarModalHeaderStyleBaseOne,
  CarModalHeaderStyleBaseTwo,
  CarModalHeaderStyleBaseThree,
};
