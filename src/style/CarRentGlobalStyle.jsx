import { Global, css } from "@emotion/react";

const CarRentGlobalStyle = () => {
  return (
    <Global
      styles={{
        "@font-face": {
          fontFamily: "Manrope-Regular",
          src: "url('./fonts/Manrope-Regular.ttf') format('truetype')",
          fontWeight: 400,
        },
      }}
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

        @font-face {
          font-family: "Manrope-Regular";
          src: local("Manrope-Regular"),
            url("./fonts/Manrope-Regular.ttf") format("truetype");
          font-weight: 400;
        }

        @font-face {
          font-family: "Manrope-Medium";
          src: local("Manrope-Medium"),
            url("./fonts/Manrope-Medium.ttf") format("truetype");
          font-weight: 500;
        }

        @font-face {
          font-family: "Manrope-SemiBold";
          src: local("Manrope-SemiBold"),
            url("./fonts/Manrope-SemiBold.ttf") format("truetype");
          font-weight: 600;
        }

        @font-face {
          font-family: "Montserrat-Regular";
          src: local("Montserrat-Regular"),
            url("./fonts/Montserrat-Regular.ttf") format("truetype");
          font-weight: 400;
        }

        @font-face {
          font-family: "Montserrat-SemiBold";
          src: local("Montserrat-SemiBold"),
            url("./fonts/Montserrat-SemiBold.ttf") format("truetype");
          font-weight: 600;
        }


*/
