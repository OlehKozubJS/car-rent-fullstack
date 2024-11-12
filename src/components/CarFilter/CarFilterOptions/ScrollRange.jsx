import { useEffect, useState } from "react";

const ScrollRange = ({ value, onChange, statorHeight, rotorHeight }) => {
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
      if (newValue >= 0 && newValue <= statorHeight - rotorHeight) {
        onChange(newValue);
      }
    }
  };
  //    console.log(Object.entries({ variableName }));
  const handleMouseUp = () => {
    setIsDraggable(false);
  };

  const handleEventListener = (eventType, callback) => {
    return () => {
      window.addEventListener(eventType, callback);

      return () => {
        window.removeEventListener(eventType, callback);
      };
    };
  };

  useEffect(handleEventListener("mouseup", handleMouseUp), []);

  useEffect(handleEventListener("mousemove", handleMouseMove), [isDraggable]);

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
