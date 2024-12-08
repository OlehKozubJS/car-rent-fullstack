import { injectGlobal } from "@emotion/css";

injectGlobal`
  @font-face {
    font-family: "Kings-Regular";

    src: local("Kings-Regular"), url("./Kings-Regular.eot") format("embedded-opentype"),
      url("./Kings-Regular.eot?#iefix") format("embedded-opentype");

    unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f, U+A720-A7FF;
  }

  @font-face {
    font-family: "Ojuju";

    src: local("Ojuju"), 
      url("./Ojuju.eot") format("eot"),
      url("./Ojuju.eot?#iefix") format("embedded-opentype"),

    unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f, U+A720-A7FF;
  }

  body {
    font-family: "Ojuju", sans-serif;
  }
`;

import { commonFonts } from "./fonts";

export { ManropeR, ManropeM, ManropeB, MontserratR, MontserratB, commonFonts };
