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
      setMenuContainerHeight(menuList.offsetHeight + 28);
    } else {
      setMenuContainerHeight(272);
    }
  }, []);

  return (
    <div
      className="menu-container"
      style={{ height: `${menuContainerHeight}px` }}
    >
      <div className="menu-list-container">
        <CarFilterOptionsMenuList
          options={options}
          onChange={onChange}
          top={-valueY * 5}
        />
      </div>
      <ScrollRange
        value={valueY}
        onChange={handleScrollRangeValue}
        height={5}
      />
    </div>
  );
};

export { CarFilterOptionsMenu };
