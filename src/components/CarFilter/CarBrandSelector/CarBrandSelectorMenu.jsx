import { useEffect, useState } from "react";

import { ScrollRange } from "./ScrollRange";
import { CarBrandSelectorMenuList } from "./CarBrandSelectorMenuList";

import { CarBrandSelectorMenuContainerStyleBase } from "./CarBrandSelectorStyles";

const CarBrandSelectorMenu = ({ options, onChange }) => {
  const MAX_MENU_LIST_HEIGHT = 244;

  const [scrollRangeValue, setScrollRangeValue] = useState(0);
  const [menuListContainerHeight, setMenuListContainerHeight] = useState(null);
  const [menuListHeight, setMenuListHeight] = useState(null);

  const handleScrollRangeValue = (value) => {
    setScrollRangeValue(value);
  };

  useEffect(() => {
    const menuList = document.querySelector(".menu-list");
    setScrollRangeValue(0);
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
    <CarBrandSelectorMenuContainerStyleBase
      style={{ height: `${menuListContainerHeight + 28}px` }}
    >
      <CarBrandSelectorMenuList
        options={options}
        onChange={onChange}
        top={-scrollRangeValue * 5}
      />
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
    </CarBrandSelectorMenuContainerStyleBase>
  );
};

export { CarBrandSelectorMenu };
