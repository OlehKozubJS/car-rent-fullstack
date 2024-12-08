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
  }
`;

import commonFonts from "./CarRentGlobalStyle.module.css";

export default commonFonts;
