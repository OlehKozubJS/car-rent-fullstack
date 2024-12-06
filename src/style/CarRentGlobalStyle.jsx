import styled from "@emotion/styled";
import { injectGlobal } from "@emotion/css";

injectGlobal`
  @font-face {
    font-family: "Kings-Regular";
    src: 
      local("Kings-Regular),
      url('https://fonts.googleapis.com/css2?family=Kings&display=swap')
        format('truetype');
    font-weight: 400;
    unicode-range: 
      U+0100-024f, U+1-1eff, U+20a0-20ab,
      U+20ad-20cf, U+2c60-2c7f, U+A720-A7FF;
  }

  * {
    color: blue;
    font-family: "Kings-Regular", serif;
  } 
`;

const CarRentGlobalStyleBase = styled.div`
  color: inherit;
`;

export { CarRentGlobalStyleBase };

/*
  @font-face {
    font-family: Manrope-Regular;
    src: url('./Kings-Regular.ttf') format('truetype');
    font-weight: 400;
  }


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
