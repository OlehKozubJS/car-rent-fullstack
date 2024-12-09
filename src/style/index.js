import { injectGlobal } from "@emotion/css";

import {
  ManropeRegular,
  ManropeMedium,
  ManropeSemiBold,
  MontserratRegular,
  MontserratSemiBold,
  KingsRegular,
  Ojuju,
  MysteryQuest,
} from "./fonts";

injectGlobal`
  @font-face {
    font-family: "Manrope-Regular";
    src: url(${ManropeRegular});
  }

  @font-face {
    font-family: "Manrope-Medium";
    src: url(${ManropeMedium});
  }

  @font-face {
    font-family: "Manrope-SemiBold";
    src: url(${ManropeSemiBold});
  }

  @font-face {
    font-family: "Montserrat-Regular";
    src: url(${MontserratRegular});
  }

  @font-face {
    font-family: "Montserrat-SemiBold";
    src: url(${MontserratSemiBold});
  }

  @font-face {
    font-family: "Kings-Regular";
    src: url(${KingsRegular});
  }

  @font-face {
    font-family: "Ojuju";
    src: url(${Ojuju});
  }

  @font-face {
    font-family: "MysteryQuest";
    src: url(${MysteryQuest});
  }
`;
