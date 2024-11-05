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
      <div
        className="menu-container"
        style={{ height: `${menuContainerHeight}px` }}
      >
        <div className="menu-list-container">
          <CarFilterOptionsMenuList options={options} onChange={onChange} />
        </div>
        <ScrollRange value={valueY} onChange={handleScrollRangeValue} />
      </div>
      <p>{valueY}</p>
    </>
  );
};

export { CarFilterOptionsMenu };
