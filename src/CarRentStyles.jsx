import { Global, css } from "@emotion/react";

import { carFilterOptionsStyles } from "./components";

import {} from "./";

const CarFilterOptionsStyles = () => {
  return (
    <Global
      styles={css`
        ${carFilterOptionsStyles}
      `}
    />
  );
};

export { CarFilterOptionsStyles };
