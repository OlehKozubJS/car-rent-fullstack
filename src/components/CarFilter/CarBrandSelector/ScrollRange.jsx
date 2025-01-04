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
      const newValue = value + clientY - mouseDownY;

      if (newValue >= 0 && newValue <= statorHeight - rotorHeight) {
        onChange(newValue);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggable(false);
  };

  useEffect(handleEventListener("mousemove", handleMouseMove), [isDraggable]);

  useEffect(handleEventListener("mouseup", handleMouseUp), []);

  return (
    <ScrollRangeStatorStyleBase height={statorHeight}>
      <ScrollRangeRotorStyleBase
        height={rotorHeight}
        top={value}
        onMouseDown={handleMouseDown}
      ></ScrollRangeRotorStyleBase>
    </ScrollRangeStatorStyleBase>
  );
};

export { ScrollRange };
