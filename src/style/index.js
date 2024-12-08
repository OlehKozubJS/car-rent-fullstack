import { injectGlobal } from "@emotion/css";

import KingsRegular from "./fonts/Kings-Regular.ttf";
import Ojuju from "./fonts/Ojuju.ttf";

injectGlobal`
  @font-face {
    font-family: "Kings-Regular";
    src: url(${KingsRegular});
  }

  @font-face {
    font-family: "Ojuju";
    src: url(${Ojuju});
    unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f, U+A720-A7FF;
  }
`;

import commonFonts from "./CarRentGlobalStyle.module.css";

export default commonFonts;

//     unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f, U+A720-A7FF;
