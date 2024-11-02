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
      if (newValueY >= 0 && newValueY <= 250) {
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
          width: 100px;
          height: 500px;
          background-color: cyan;
          position: relative;
        `}
      >
        <div
          onMouseDown={handleMouseDown}
          style={{
            width: "100px",
            height: "250px",
            backgroundColor: "blue",
            position: "absolute",
            top: `${valueY}px`,
            left: "0px",
          }}
        ></div>
      </div>
      <p>{!isDraggable && "not "}draggable</p>
      <p>{mouseDownY}</p>
      <p>{valueY}</p>
    </>
  );
};

export { ScrollRangeTest };
