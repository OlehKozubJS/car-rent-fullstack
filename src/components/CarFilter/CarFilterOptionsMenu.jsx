import { useEffect, useState } from "react";
import { Global, css } from "@emotion/react";

import { ScrollRange } from "./ScrollRange";
import { CarFilterOptionsMenuList } from "./CarFilterOptionsMenuList";

const CarFilterOptionsMenu = ({ options, onChange }) => {
  const [valueY, setValueY] = useState(0);
  const [menuContainerHeight, setMenuContainerHeight] = useState(272);

  const resetRange = () => {
    setValueY(0);
  };

  const handleScrollRangeValue = (value) => {
    setValueY(value);
  };

  useEffect(() => {
    const menuList = document.querySelector(".menu-list");

    if (menuList.offsetHeight < 244) {
      setMenuContainerHeight(menuList.offsetHeight + 28);
    } else {
      setMenuContainerHeight(272);
    }
  }, []);

  return (
    <>
      <button type="button" onClick={resetRange}>
        Reset
      </button>
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

          .menu-list {
            list-style: none;
            background-color: red;
            margin: 0;
            padding: 0;
          }

          .menu-option-radio {
            display: none;
          }

          .options-selector-container {
            position: relative;
          }
        `}
      />
      <div className="menu-container">
        <div>
          <CarFilterOptionsMenuList options={options} onChange={onChange} />
        </div>
        <ScrollRange value={valueY} onChange={handleScrollRangeValue} />
      </div>
      <p>{valueY}</p>
    </>
  );
};

export { CarFilterOptionsMenu };
