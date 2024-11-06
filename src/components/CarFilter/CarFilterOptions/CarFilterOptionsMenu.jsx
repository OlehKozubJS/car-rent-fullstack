import { useEffect, useState } from "react";

import { ScrollRange } from "./ScrollRange";
import { CarFilterOptionsMenuList } from "./CarFilterOptionsMenuList";

const CarFilterOptionsMenu = ({ options, onChange }) => {
  const [valueY, setValueY] = useState(0);
  const [menuListContainerHeight, setMenuListContainerHeight] = useState(null);
  const [menuListHeight, setMenuListHeight] = useState(null);

  const handleScrollRangeValue = (value) => {
    setValueY(value);
  };

  useEffect(() => {
    const menuList = document.querySelector(".menu-list");

    if (menuList.offsetHeight < 244) {
      setMenuListContainerHeight(menuList.offsetHeight);
    } else {
      setMenuListContainerHeight(244);
    }
  }, []);

  useEffect(() => {
    const menuList = document.querySelector(".menu-list");

    setMenuListHeight(menuList.offsetHeight);
  }, []);

  return (
    <>
      <div
        className="menu-container"
        style={{ height: `${menuListContainerHeight + 28}px` }}
      >
        <div className="menu-list-container">
          <CarFilterOptionsMenuList
            options={options.slice(0, 5)}
            onChange={onChange}
            top={-valueY * 5}
          />
        </div>
        <ScrollRange
          value={valueY}
          onChange={handleScrollRangeValue}
          statorHeight={menuListContainerHeight}
          rotorHeight={
            menuListContainerHeight -
            (menuListHeight - menuListContainerHeight) / 5
          }
        />
      </div>
      {menuListHeight}
    </>
  );
};

export { CarFilterOptionsMenu };
