import { Global, css } from "@emotion/react";

const CarFilterOptionsStyles = () => {
  return (
    <Global
      styles={css`
        .menu-container {
          box-sizing: border-box;

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
        }

        .menu-list-container {
          height: 244px;
          width: 190px;

          overflow: hidden;
          position: relative;
        }

        .menu-list {
          list-style: none;
          margin: 0;
          padding: 0;

          position: absolute;
          left: 0px;

          color: rgba(18, 20, 23, 0.2);
        }

        .menu-option-radio {
          display: none;
        }

        .scroll-range-stator {
          width: 8px;

          position: relative;
        }

        .scroll-range-rotor {
          position: absolute;
          width: 8px;
          right: 0px;

          background-color: rgba(18, 20, 23, 0.05);

          border-radius: 10px;
        }

        .car-filter-input-label {
          display: flex;

          box-sizing: border-box;
          height: 48px;
          width: 224px;
          padding: 14px 18px;

          background-color: rgb(247, 247, 251);
          border-radius: 14px;

          margin-bottom: 4px;
        }

        .car-filter-input {
          outline: none;
          border: none;

          background-color: inherit;

          font-size: 18px;
          color: rgb(18, 20, 23);
        }

        .car-filter-input {
        }
      `}
    />
  );
};

export { CarFilterOptionsStyles };
