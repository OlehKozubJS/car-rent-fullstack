import { useEffect, useState } from "react";

import { ScrollRange } from "./ScrollRange";
import { CarFilterOptionsMenuList } from "./CarFilterOptionsMenuList";

const CarFilterOptionsMenu = ({ options, onChange }) => {
  const [valueY, setValueY] = useState(0);
  const [menuContainerHeight, setMenuContainerHeight] = useState(272);
  const [menuListHeight, setMenuListHeight] = useState(244);

  const handleScrollRangeValue = (value) => {
    setValueY(value);
  };

  useEffect(() => {
    const menuList = document.querySelector(".menu-list");

    if (menuList.offsetHeight < 244) {
      setMenuListHeight(menuList.offsetHeight);
    } else {
      setMenuListHeight(244);
    }
  }, []);

  return (
    <>
      <div
        className="menu-container"
        style={{ height: `${menuListHeight + 28}px` }}
      >
        <div className="menu-list-container">
          <CarFilterOptionsMenuList
            options={options}
            onChange={onChange}
            top={-valueY * 10}
          />
        </div>
        <ScrollRange
          value={valueY}
          onChange={handleScrollRangeValue}
          height={50}
        />
      </div>
      {menuContainerHeight}
    </>
  );
};

export { CarFilterOptionsMenu };
