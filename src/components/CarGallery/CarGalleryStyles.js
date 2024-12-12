import styled from "@emotion/styled";

const CarGalleryStyleBase = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 29px;
  row-gap: 50px;
`;

const CarGalleryItemContainerStyleBase = styled.li`
  position: relative;
  width: 274px;

  border-radius: 24px;

  display: flex;
  flex-direction: column;
`;

const CarGalleryImageContainerStyleBase = styled.div`
  height: 268px;
  width: 274px;

  position: relative;
  overflow: hidden;
`;

const CarGalleryImageStyleBase = styled.img`
  border-radius: 12px;
  height: 100%;
`;

const CarGalleryFavouriteButtonStyleBase = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  background: none;
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

const CarGalleryButtonStyleBase = styled.button`
  margin-top: 28px;

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
  CarGalleryStyleBase,
  CarGalleryItemContainerStyleBase,
  CarGalleryImageContainerStyleBase,
  CarGalleryImageStyleBase,
  CarGalleryFavouriteButtonStyleBase,
  CarGalleryItemsStyleBase,
  CarGalleryItemStyleBase,
  CarGalleryItemValueStyleBase,
  CarGalleryButtonStyleBase,
};
