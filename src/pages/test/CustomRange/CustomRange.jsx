import { useEffect, useState } from "react";

import { handleEventListener } from "../../hooks";

import { RangeField, RangeDial } from "./SimplestCustomRangeStyle";

const CustomRange = ({ value, onChange }) => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [mouseDownX, setMouseDownX] = useState(0);

  const handleMouseDown = ({ clientX }) => {
    setIsDraggable(true);
    setMouseDownX(clientX);
  };

  const handleMouseMove = ({ clientX }) => {
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

  useEffect(handleEventListener("mousemove", handleMouseMove), [isDraggable]);

  useEffect(handleEventListener("mouseup", handleMouseUp), [isDraggable]);

  return (
    <RangeField>
      <RangeDial onMouseDown={handleMouseDown} left={value}></RangeDial>
    </RangeField>
  );
};

export { CustomRange };
