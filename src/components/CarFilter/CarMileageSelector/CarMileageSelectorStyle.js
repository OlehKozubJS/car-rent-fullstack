import styled from "@emotion/styled";

const CarMileageSelectorLabelStyleBase = `
  display: flex;
  justify-content: space-between;

  box-sizing: border-box;
  height: 48px;
  width: 224px;
  padding: 14px 18px;

  background-color: rgb(247, 247, 251);

  margin-bottom: 4px;

  &:focus-within {
    background-color: rgb(251, 251, 255);
  }
`;

const CarMileageSelectorLabelFromStyleBase = styled.label`
  ${CarMileageSelectorLabelStyleBase}
  border-radius: 14px 0px 0px 14px;
`;

const CarMileageSelectorLabelToStyleBase = styled.label`
  ${CarMileageSelectorLabelStyleBase}
  border-radius: 0px 14px 14px 0px;
`;

const CarMileageSelectorInputStyleBase = styled.input`
  outline: none;
  border: none;

  width: 150px;
  background-color: inherit;

  font-size: 18px;
  color: rgb(18, 20, 23);
`;

const CarMileageSelectorDividerStyleBase = styled.button`
  height: 48px;
  width: 0px;

  background-color: rgba(138, 138, 137, 0.2);
`;

export {
  CarMileageSelectorLabelStyleBase,
  CarMileageSelectorLabelFromStyleBase,
  CarMileageSelectorLabelToStyleBase,
  CarMileageSelectorInputStyleBase,
  CarMileageSelectorDividerStyleBase,
};
