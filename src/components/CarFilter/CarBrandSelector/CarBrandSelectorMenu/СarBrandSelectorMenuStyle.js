import styled from "@emotion/styled";

const CarBrandSelectorMenuContainerStyleBase = styled.div`
  box-sizing: border-box;
  height: ${({ height }) => {
    return height;
  }}px;
  width: 224px;

  padding-block: 14px;
  padding-left: 18px;
  padding-right: 8px;

  border-style: solid;
  border-radius: 14px;
  border-width: 1px;
  border-color: rgba(18, 20, 23, 0.05);

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export { CarBrandSelectorMenuContainerStyleBase };
