import { useEffect, useState } from "react";

import { handleEventListener } from "../../hooks";

import { RangeField, RangeDial } from "./SimplestCustomRangeStyle";

const DraggableComponent = ({ value, onChange }) => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [mouseDownY, setMouseDownY] = useState(0);
  const [mouseDownX, setMouseDownX] = useState(0);

  const handleMouseDown = ({ clientX }) => {
    setIsDraggable(true);
    setMouseDownX(clientX);
  };

  const handleMouseMove = ({ clientY, clientX }) => {
    if (isDraggable) {
      const newRangeValue = value + clientX - mouseDownX;

      if (newRangeValue >= 0 && newRangeValue <= 450) {
        onChange(newRangeValue);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggable(false);
  };

  useEffect(handleEventListener("mousedown", handleMouseDown), [isDraggable]);
  useEffect(handleEventListener("mousemove", handleMouseMove), [isDraggable]);
  useEffect(handleEventListener("mouseup", handleMouseUp), [isDraggable]);

  return (
    <RangeField>
      <RangeDial onMouseDown={handleMouseDown} left={value}></RangeDial>
    </RangeField>
  );
};

export { DraggableComponent };
