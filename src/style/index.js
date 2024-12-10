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
    font-weight: 400px;
    src: url(${ManropeRegular});
  }

  @font-face {
    font-family: "Manrope-Medium";
    font-weight: 500px;
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

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }

  input {
    outline: none;
  }

  button {
    display: block;
    outline: none;
    padding: 0;
    border: none;
  }
`;
