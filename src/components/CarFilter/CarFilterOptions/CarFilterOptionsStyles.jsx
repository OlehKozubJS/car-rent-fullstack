import { Global, css } from "@emotion/react";

const CarFilterOptionsStyles = ({ menuContainerHeight }) => {
  return (
    <Global
      styles={css`
        .menu-container {
          box-sizing: border-box;

          height: ${menuContainerHeight}px;
          width: 224px;

          padding-block: 14px;
          padding-left: 18px;
          padding-right: 8px;

          border-style: solid;
          border-radius: 14px;
          border-width: 1px;
          border-color: rgba(18, 20, 23, 0.05);

          display: flex;
          justify-content: space-between;
          align-items: flex-start;

          overflow: hidden;
        }

        .menu-list-container {
          position: relative;
        }

        .menu-list {
          list-style: none;
          background-color: red;
          margin: 0;
          padding: 0;
        }

        .menu-option-radio {
          display: none;
        }

                  ".scroll-range-stator": {
            height: "244px",
            width: "8px",

            position: "relative",
          },

          ".scroll-range-rotor": {
            position: "absolute",
            height: "122px",
            width: "8px",
            top: `${value}px`,
            right: "0px",

            backgroundColor: "rgba(18, 20, 23, 0.05)",

            borderRadius: "10px",
          },
      `}
    />
  );
};

export { CarFilterOptionsStyles };
