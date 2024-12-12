import styled from "@emotion/styled";

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
  color: #121417;
`;

export {
  CarModalImageStyleBase,
  CarModalItemsStyleBase,
  CarModalItemStyleBase,
  CarModalItemValueStyleBase,
  CarModalSubHeaderStyleBase,
};
