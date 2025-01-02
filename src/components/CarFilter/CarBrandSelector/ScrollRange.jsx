import { useEffect, useState } from "react";

import {
  ScrollRangeStatorStyleBase,
  ScrollRangeRotorStyleBase,
} from "./CarBrandSelectorStyles";

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
    <ScrollRangeStatorStyleBase
      style={{ top: `${value}px`, height: `${statorHeight}px` }}
    >
      <ScrollRangeRotorStyleBase
        onMouseDown={handleMouseDown}
        style={{ height: `${rotorHeight}px` }}
      ></ScrollRangeRotorStyleBase>
    </ScrollRangeStatorStyleBase>
  );
};

export { ScrollRange };
