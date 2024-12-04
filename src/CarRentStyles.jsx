import { Global, css } from "@emotion/react";

import { carBrandSelectorStyles } from "./components";

import {} from "./";

const CarRentStyles = () => {
  return (
    <Global
      styles={css`
        ${carBrandSelectorStyles}
      `}
    />
  );
};

export { CarRentStyles };
