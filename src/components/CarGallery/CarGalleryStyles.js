import styled from "@emotion/styled";

const CarGalleryContainerStyleBase = styled.ul``;

const CarGalleryItemStyleBase = styled.li`
  position: relative;
  width: 274px;

  border-radius: 24px;

  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const CarGalleryImageStyleBase = styled.img`
  border-radius: 12px;
  width: 100%;
`;

const CarGalleryItemsStyleBase = styled.div`
  margin-top: 8px;

  display: flex;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 4px;
`;

const CarGalleryItemStyleBase = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);

  font-family: "Manrope-Regular", sans-serif;
`;

const CarGalleryItemValueStyleBase = styled.span`
  color: rgb(52, 112, 255);
`;

const CarGallerySubHeaderStyleBase = styled.h4`
  font-family: "Manrope-Medium", sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: rgb(18, 20, 23);
`;

const CarGalleryButtonStyleBase = styled.button`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 12px;
  background-color: rgb(52, 112, 255);

  color: #fff;
  font-size: 14px;
  line-height: 20px;

  font-family: "Manrope-SemiBold", sans-serif;

  &:hover {
    background-color: rgb(11, 68, 205);
  }
`;

export {
  CarGalleryContainerStyleBase,
  CarGalleryItemStyleBase,
  CarGalleryImageStyleBase,
  CarGalleryItemsStyleBase,
  CarGalleryItemStyleBase,
  CarGalleryItemValueStyleBase,
  CarGallerySubHeaderStyleBase,
  CarGalleryButtonStyleBase,
};
