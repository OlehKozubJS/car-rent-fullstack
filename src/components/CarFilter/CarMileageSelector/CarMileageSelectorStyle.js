import styled from "@emotion/styled";

const CarMileageSelectorLabelStyleBase = styled.label`
  display: flex;
  justify-content: space-between;

  box-sizing: border-box;
  height: 48px;
  width: 224px;
  padding: 14px 18px;

  background-color: rgb(247, 247, 251);
  border-radius: 14px 0px 0px 14px;

  margin-bottom: 4px;

  &:focus-within {
    background-color: rgb(251, 251, 255);
  }
`;

const CarMileageSelectorLabelFromStyleBase = styled.label``;

const CarMileageSelectorLabelToStyleBase = styled.label``;

const CarMileageSelectorInputStyleBase = styled.input`
  outline: none;
  border: none;

  width: 150px;
  background-color: inherit;

  font-size: 18px;
  color: rgb(18, 20, 23);
`;

const CarMileageSelectorDividerStyleBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
`;

export {
  CarMileageSelectorLabelStyleBase,
  CarMileageSelectorInputStyleBase,
  CarMileageSelectorDividerStyleBase,
};
