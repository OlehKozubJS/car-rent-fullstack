import { useEffect, useState } from "react";
import { css } from "@emotion/css";

import makes from "./makes.json";

const ScrollRangeTest = () => {
  const [carBrands] = useState(makes);
  const [isDraggable, setIsDraggable] = useState(false);
  const [mouseDownY, setMouseDownY] = useState(0);
  const [valueY, setValueY] = useState(14);

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
      if (newValueY >= 14 && newValueY <= 122) {
        setValueY(newValueY);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggable(false);
  };

  const resetRange = () => {
    setValueY(14);
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
          height: 272px;
          width: 224px;

          background-color: white;

          padiing-block: 14px;
          padding-left: 18px
          padding-right: 8px;

          border-style: solid;
          border-radius: 14px;
          border-width: 1px;
          border-color: rgba(18, 20, 23, 0.05);

          position: relative;
        `}
      >
        <ul>
          {carBrands.slice(0, 3).map((carBrand, carBrandIndex) => {
            return <li key={carBrandIndex}>{carBrand}</li>;
          })}
        </ul>
        <div
          onMouseDown={handleMouseDown}
          className={css`
            position: absolute;
            height: 136px;
            width: 8px;
            top: ${valueY}px;
            right: 8px;

            background-color: rgba(18, 20, 23, 0.05);

            border-radius: 10px;
          `}
        ></div>
      </div>
      <p>{!isDraggable && "not "}draggable</p>
      <p>{mouseDownY}</p>
      <p>{valueY}</p>
    </>
  );
};

export { ScrollRangeTest };
