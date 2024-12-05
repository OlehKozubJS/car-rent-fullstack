import { Global, css } from "@emotion/react";

const CarRentGlobalStyle = () => {
  return (
    <Global
      styles={css`
        body {
          background-image: linear-gradient(
            to top,
            rgb(150, 150, 190),
            rgb(190, 150, 150)
          );
        }
      `}
    />
  );
};

export { CarRentGlobalStyle };
