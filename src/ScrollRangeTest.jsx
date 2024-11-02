import { useEffect, useState } from "react";
import { css } from "@emotion/css";

const ScrollRangeTest = () => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [mouseDownY, setMouseDownY] = useState(0);
  const [valueY, setValueY] = useState(0);

  const handleMouseDown = (event) => {
    const cursorY = event.clientY;
    setIsDraggable(true);
    setMouseDownY(cursorY - valueY);
  };

  const handleMouseMove = (event) => {
    event.preventDefault();

    if (isDraggable) {
      const cursorY = event.clientY;
      const newValueY = cursorY - mouseDownY;
      if (newValueY >= 15 && newValueY <= 121) {
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
          height: 272px;
          width: 224px;

          background-color: cyan;
          border-radius: 14px;

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

            background-color: blue;
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
