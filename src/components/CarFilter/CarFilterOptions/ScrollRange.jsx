import { useEffect, useState } from "react";
import { css, Global } from "@emotion/react";

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
      if (newValue >= 0 && newValue <= 122) {
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
    <div className="scroll-range-stator" style={{ top: `${value}px` }}>
      <div onMouseDown={handleMouseDown} className="scroll-range-rotor"></div>
    </div>
  );
};

export { ScrollRange };
