import { useEffect, useState } from "react";
import { css } from "@emotion/css";

import makes from "./makes.json";

import { ScrollRange } from "./ScrollRange";

const ScrollRangeTest = () => {
  const [carBrands] = useState(makes);
  const [isDraggable, setIsDraggable] = useState(false);
  const [mouseDownY, setMouseDownY] = useState(0);
  const [valueY, setValueY] = useState(0);

  const handleMouseDown = (event) => {
    const cursorY = event.clientY;
    setIsDraggable(true);
    setMouseDownY(cursorY);
  };

  const handleMouseMove = (event) => {
    event.preventDefault();

    if (isDraggable) {
      const cursorY = event.clientY;
      const oldValueY = valueY;
      const newValueY = cursorY - mouseDownY + oldValueY;
      if (newValueY >= 0 && newValueY <= 136) {
        setValueY(newValueY);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggable(false);
  };

  const resetRange = () => {
    setValueY(0);
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDraggable]);

  return (
    <>
      <button type="button" onClick={resetRange}>
        Reset
      </button>
      <div
        className={css`
          box-sizing: border-box;

          height: 272px;
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
        `}
      >
        <ul
          className={css`
            list-style: none;
            margin: 0;
            padding: 0;
          `}
        >
          {carBrands.slice(0, 3).map((carBrand, carBrandIndex) => {
            return <li key={carBrandIndex}>{carBrand}</li>;
          })}
        </ul>
        <div
          className={css`
            height: 244px;
            width: 8px;

            position: relative;
          `}
        >
          <div
            onMouseDown={handleMouseDown}
            className={css`
              position: absolute;
              height: 136px;
              width: 8px;
              top: ${valueY}px;
              right: 0px;

              background-color: rgba(18, 20, 23, 0.05);

              border-radius: 10px;
            `}
          ></div>
        </div>
      </div>
      <p>{!isDraggable && "not "}draggable</p>
      <p>{mouseDownY}</p>
      <p>{valueY}</p>
    </>
  );
};

export { ScrollRangeTest };
