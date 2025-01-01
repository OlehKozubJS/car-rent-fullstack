import styled from "@emotion/styled";

const RangeField = styled.div`
  width: 500px;
  height: 50px;
  background-color: rgb(200, 200, 250);

  position: relative;
`;

const RangeDial = styled.div`
  position: absolute;
  top: 0;
  left: ${({ left }) => {
    return left;
  }}px;
  width: 50px;
  height: 50px;
  background-color: rgb(100, 100, 250);
`;

export { RangeField, RangeDial };
