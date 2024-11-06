import { useEffect, useState } from "react";

const ScrollRange = ({ value, onChange, height }) => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [mouseDownY, setMouseDownY] = useState(0);

  const handleMouseDown = (event) => {
    const cursorY = event.clientY;
    setIsDraggable(true);
    setMouseDownY(cursorY);
  };

  const handleMouseMove = (event) => {
    event.preventDefault();

    const scrollRangeStatorHeight = document.querySelector(
      ".scroll-range-stator"
    ).offsetHeight;

    if (isDraggable) {
      const cursorY = event.clientY;
      const oldValue = value;
      const newValue = cursorY - mouseDownY + oldValue;
      if (newValue >= 0 && newValue <= scrollRangeStatorHeight - height) {
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
      className="scroll-range-stator"
      style={{ top: `${value}px`, height: `${statorHeight}px` }}
    >
      <div
        onMouseDown={handleMouseDown}
        className="scroll-range-rotor"
        style={{ height: `${rotorHeight}px` }}
      ></div>
    </div>
  );
};

export { ScrollRange };
