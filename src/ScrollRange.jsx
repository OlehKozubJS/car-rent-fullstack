import { useEffect, useState } from "react";
import { css } from "@emotion/css";

const ScrollRange = ({ value, onChange }) => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [mouseDownY, setMouseDownY] = useState(0);

  const handleMouseDown = (event) => {
    const cursorY = event.clientY;
    setIsDraggable(true);
    setMouseDownY(cursorY);
  };

  const handleMouseMove = (event) => {
    event.preventDefault();

    if (isDraggable) {
      const cursorY = event.clientY;
      const oldValue = value;
      const newValue = cursorY - mouseDownY + oldValue;
      if (newValue >= 0 && newValue <= 136) {
        onChange(newValue);
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
