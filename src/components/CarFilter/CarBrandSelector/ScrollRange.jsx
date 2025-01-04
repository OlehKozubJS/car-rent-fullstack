import { useEffect, useState } from "react";

import { handleEventListener } from "../imports";

import {
  ScrollRangeStatorStyleBase,
  ScrollRangeRotorStyleBase,
} from "./CarBrandSelectorStyles";

const ScrollRange = ({ value, onChange, statorHeight, rotorHeight }) => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [mouseDownY, setMouseDownY] = useState(0);

  const handleMouseDown = ({ clientY }) => {
    setIsDraggable(true);
    setMouseDownY(clientY);
  };

  const handleMouseMove = ({ clientY }) => {
    if (isDraggable) {
      const newValue = value - mouseDownY + clientY;

      if (newValue >= 0 && newValue <= statorHeight - rotorHeight) {
        onChange(newValue);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggable(false);
  };

  useEffect(handleEventListener("mouseup", handleMouseUp), []);

  useEffect(handleEventListener("mousemove", handleMouseMove), [isDraggable]);

  return (
    <ScrollRangeStatorStyleBase
      height={statorHeight}
      style={{ top: `${value}px` }}
    >
      <ScrollRangeRotorStyleBase
        onMouseDown={handleMouseDown}
        style={{ height: `${rotorHeight}px` }}
      ></ScrollRangeRotorStyleBase>
    </ScrollRangeStatorStyleBase>
  );
};

export { ScrollRange };
