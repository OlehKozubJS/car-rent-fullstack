import {
  ManropeRegular,
  ManropeMedium,
  ManropeSemiBold,
  MontserratRegular,
  MontserratSemiBold,
  KingsRegular,
  MysteryQuest,
  Ojuju,
} from "./fonts";

injectGlobal`
  @font-face {
    font-family: "Kings-Regular";
    src: url(${KingsRegular});
  }

  @font-face {
    font-family: "Ojuju";
    src: url(${Ojuju});
  }

  @font-face {
    font-family: "Manrope-Regular";
    src: url(${ManropeRegular});
  }

  @font-face {
    font-family: "MysteryQuest";
    src: url(${MysteryQuest});
  }
`;
