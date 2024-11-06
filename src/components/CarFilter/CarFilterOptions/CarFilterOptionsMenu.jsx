import { useEffect, useState } from "react";

import { ScrollRange } from "./ScrollRange";
import { CarFilterOptionsMenuList } from "./CarFilterOptionsMenuList";

const CarFilterOptionsMenu = ({ options, onChange }) => {
  const MAX_MENU_LIST_HEIGHT = 244;

  const [scrollRangeValue, setScrollRangeValue] = useState(0);
  const [menuListContainerHeight, setMenuListContainerHeight] = useState(null);
  const [menuListHeight, setMenuListHeight] = useState(null);

  const handleScrollRangeValue = (value) => {
    setScrollRangeValue(value);
  };

  useEffect(() => {
    const menuList = document.querySelector(".menu-list");

    setMenuListHeight(menuList.offsetHeight);
  }, [options]);

  useEffect(() => {
    if (menuListHeight <= MAX_MENU_LIST_HEIGHT) {
      setMenuListContainerHeight(menuListHeight);
    } else {
      setMenuListContainerHeight(MAX_MENU_LIST_HEIGHT);
    }
  }, [menuListHeight]);

  return (
    <>
      <div
        className="menu-container"
        style={{ height: `${menuListContainerHeight + 28}px` }}
      >
        <div className="menu-list-container">
          <CarFilterOptionsMenuList
            options={options}
            onChange={onChange}
            top={-scrollRangeValue * 5}
          />
        </div>
        {menuListHeight > MAX_MENU_LIST_HEIGHT && (
          <ScrollRange
            value={scrollRangeValue}
            onChange={handleScrollRangeValue}
            statorHeight={menuListContainerHeight}
            rotorHeight={
              menuListContainerHeight -
              (menuListHeight - menuListContainerHeight) / 5
            }
          />
        )}
      </div>
      {""}
    </>
  );
};

export { CarFilterOptionsMenu };
