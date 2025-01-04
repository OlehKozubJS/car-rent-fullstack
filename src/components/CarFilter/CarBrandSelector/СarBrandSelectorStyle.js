import styled from "@emotion/styled";

const CarBrandSelectorContainerStyleBase = styled.div`
  position: relative;
  z-index: 1;
`;

const CarBrandSelectorNotFoundMessageStyleBase = styled.div`
  box-sizing: border-box;

  width: 224px;

  padding-block: 14px;
  padding-inline: 18px;

  border-style: solid;
  border-radius: 14px;
  border-width: 1px;
  border-color: rgba(180, 20, 23, 0.05);

  display: flex;
  justify-content: center;
  align-items: center;

  color: rgba(180, 20, 23, 0.5);
`;

export {
  CarBrandSelectorContainerStyleBase,
  CarBrandSelectorNotFoundMessageStyleBase,
};
