import { Global, css } from "@emotion/react";

const CarRentGlobalStyle = () => {
  return (
    <Global
      styles={css`
        body {
          background-image: linear-gradient(
            270deg,
            rgb(200, 200, 250),
            rgb(250, 200, 200)
          );
        }
      `}
    />
  );
};

export { CarRentGlobalStyle };

/*

  font-family: 'Manrope-Regular', sans-serif;
  font-family: 'Manrope-Medium', sans-serif;
  font-family: 'Manrope-SemiBold', sans-serif;
  font-family: 'Montserrat-Regular', sans-serif;
  font-family: 'Montserrat-SemiBold', sans-serif;

*/
