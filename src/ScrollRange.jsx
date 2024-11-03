import { useEffect, useState } from "react";
import { css } from "@emotion/css";

const ScrollRange = () => {
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
  );
};

export { ScrollRange };
