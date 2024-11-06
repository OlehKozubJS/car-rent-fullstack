import { Global, css } from "@emotion/react";

import { carFilterOptionsStyles } from "./components";

import {} from "./";

const CarRentStyles = () => {
  return (
    <Global
      styles={css`
        ${carFilterOptionsStyles}
      `}
    />
  );
};

export { CarRentStyles };
