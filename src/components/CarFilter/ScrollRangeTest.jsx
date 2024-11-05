import { useEffect, useState } from "react";
import { Global, css } from "@emotion/react";

import makes from "../../makes.json";

import { ScrollRange } from "./ScrollRange";

const ScrollRangeTest = () => {
  const [carBrands] = useState(makes);
  const [valueY, setValueY] = useState(0);
  const [menuContainerWidth, setMenuContainerWidth] = useState(272);

  const resetRange = () => {
    setValueY(0);
  };

  const handleScrollRangeValue = (value) => {
    setValueY(value);
  };

  useEffect(() => {
    const menuList = document.querySelector(".menu-list");
    console.log(menuList.offsetHeight);

    if (menuList.offsetHeight < 244) {
      setMenuContainerWidth(menuList.offsetHeight + 28);
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

            height: ${menuContainerWidth}px;
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
          }

          .menu-list {
            list-style: none;
            background-color: red;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <div className="menu-container">
        <ul className="menu-list">
          {carBrands.slice(0, 3).map((carBrand, carBrandIndex) => {
            return <li key={carBrandIndex}>{carBrand}</li>;
          })}
        </ul>
        <ScrollRange value={valueY} onChange={handleScrollRangeValue} />
      </div>
      <p>{valueY}</p>
    </>
  );
};

export { ScrollRangeTest };

/*

*/
