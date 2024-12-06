import { injectGlobal } from "@emotion/css";

injectGlobal`
  * {
    background-color: red;
  }
`;

import {
  ManropeR,
  ManropeM,
  ManropeB,
  MontserratR,
  MontserratB,
} from "./fonts";

export { ManropeR, ManropeM, ManropeB, MontserratR, MontserratB };
