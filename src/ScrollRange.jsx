import { useEffect, useState } from "react";
import { css } from "@emotion/css";

const ScrollRange = ({ value, onChange }) => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [mouseDownY, setMouseDownY] = useState(0);

  const handleMouseDown = (event) => {
    const cursorY = event.clientY;
    setIsDraggable(true);
    setMouseDownY(cursorY - value);
  };

  const handleMouseMove = (event) => {
    event.preventDefault();

    if (isDraggable) {
      const cursorY = event.clientY;
      const newValue = cursorY - mouseDownY;
      if (newValue >= 14 && newValue <= 122) {
        onchange(newValue);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggable(false);
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

        background-color: white;

        border-style: solid;
        border-radius: 14px;
        border-width: 1px;
        border-color: rgba(18, 20, 23, 0.05);

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
          right: 8px;

          background-color: rgba(18, 20, 23, 0.05);

          border-radius: 10px;
        `}
      ></div>
    </div>
  );
};

export { ScrollRange };
