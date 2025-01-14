import styled from "@emotion/styled";

const CarBrandSelectorMenuListContainerStyleBase = styled.div`
  height: 244px;
  width: 190px;
  overflow: hidden;

  position: relative;
`;

const CarBrandSelectorMenuListStyleBase = styled.ul`
  position: absolute;

  list-style: none;
  margin: 0;
  padding: 0;

  top: ${({ top }) => {
    return top;
  }}px;
  left: 0px;
`;

const CarBrandSelectorMenuItemStyleBase = styled.li`
  color: rgba(18, 20, 23, 0.2);

  transition: 500ms;
  &:hover {
    color: rgb(18, 20, 23);
  }
`;

const CarBrandSelectorMenuOptionRadioStyleBase = styled.input`
  display: none;
`;

export {
  CarBrandSelectorMenuListContainerStyleBase,
  CarBrandSelectorMenuListStyleBase,
  CarBrandSelectorMenuItemStyleBase,
  CarBrandSelectorMenuOptionRadioStyleBase,
};
