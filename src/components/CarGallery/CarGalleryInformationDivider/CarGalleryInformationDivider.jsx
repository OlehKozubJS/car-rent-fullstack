import styled from "@emotion/styled";

const CarGalleryInformationDividerStyleBase = styled.div`
  height: 16px;
  width: 0.5px;

  background-color: rgba(18, 20, 23, 0.1);
`;

const CarGalleryInformationDivider = () => {
  return (
    <CarGalleryInformationDividerStyleBase></CarGalleryInformationDividerStyleBase>
  );
};

export { CarGalleryInformationDivider };
