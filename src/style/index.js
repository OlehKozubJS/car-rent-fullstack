import { injectGlobal } from "@emotion/css";

import KingsRegular from "./fonts/Kings-Regular.ttf";
import Ojuju from "./fonts/Ojuju.ttf";
import ManropeRegular from "./fonts/Manrope-Regular.ttf";
import MysteryQuest from "./fonts/MysteryQuest-Regular.ttf";

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
