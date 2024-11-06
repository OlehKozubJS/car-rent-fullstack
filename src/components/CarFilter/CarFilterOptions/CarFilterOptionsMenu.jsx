import { useEffect, useState } from "react";

import { ScrollRange } from "./ScrollRange";
import { CarFilterOptionsMenuList } from "./CarFilterOptionsMenuList";

const CarFilterOptionsMenu = ({ options, onChange }) => {
  const MAX_MENU_LIST_HEIGHT = 244;

  const [valueY, setValueY] = useState(0);
  const [menuListContainerHeight, setMenuListContainerHeight] = useState(null);
  const [menuListHeight, setMenuListHeight] = useState(null);

  const handleScrollRangeValue = (value) => {
    setValueY(value);
  };

  useEffect(() => {
    const menuList = document.querySelector(".menu-list");

    setMenuListHeight(menuList.offsetHeight);
  }, []);

  useEffect(() => {
    if (menuListHeight < MAX_MENU_LIST_HEIGHT) {
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
            options={options.slice(0, 22)}
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
      {""}
    </>
  );
};

export { CarFilterOptionsMenu };
