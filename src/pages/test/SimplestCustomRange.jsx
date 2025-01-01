import { useEffect, useState } from "react";

import { handleEventListener } from "../../hooks";

import { RangeField, RangeDial } from "./SimplestCustomRangeStyle";

const SimplestCustomRange = ({ value, onChange }) => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [rangeValue, setRangeValue] = useState(value);
  const [mouseDownX, setMouseDownX] = useState(0);

  const handleMouseDown = ({ clientX }) => {
    setIsDraggable(true);
    setMouseDownX(clientX);
  };

  const handleMouseMove = ({ clientX }) => {
    if (isDraggable) {
      const newRangeValue = rangeValue + clientX - mouseDownX;

      if (newRangeValue >= 0 && newRangeValue <= 450) {
        setRangeValue(newRangeValue);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggable(false);
  };

  useEffect(handleEventListener("mousemove", handleMouseMove), [isDraggable]);

  useEffect(handleEventListener("mouseup", handleMouseUp), [isDraggable]);

  useEffect(() => {
    onChange(rangeValue);
  }, [rangeValue]);

  return (
    <RangeField>
      <RangeDial onMouseDown={handleMouseDown} left={rangeValue}></RangeDial>
    </RangeField>
  );
};

export { SimplestCustomRange };
