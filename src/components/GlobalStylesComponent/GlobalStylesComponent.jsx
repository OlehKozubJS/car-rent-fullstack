import { Global, css } from "@emotion/react";

const GlobalStylesComponent = ({ styles }) => {
  return (
    <Global
      styles={css`
        ${styles}
      `}
    />
  );
};

export { GlobalStylesComponent };
