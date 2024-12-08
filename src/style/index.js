import { injectGlobal } from "@emotion/css";

injectGlobal`
  @font-face {
    font-family: "Kings-Regular";

    src: local("Kings-Regular"),
      url("./fonts/Kings-Regular.ttf") format("truetype"),
      url(./fonts/Kings-Regular.eot?#iefix) format("embedded-opentype");

    unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f,
      U+A720-A7FF;
  }
`;

import commonFonts from "./CarRentGlobalStyle.module.css";

export default commonFonts;
