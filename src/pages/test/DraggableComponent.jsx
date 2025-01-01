import { useEffect, useState } from "react";

import { handleEventListener } from "../../hooks";

import { RangeDial } from "./SimplestCustomRangeStyle";

const DraggableComponent = ({ value, onChange }) => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [mouseDownY, setMouseDownY] = useState(0);
  const [mouseDownX, setMouseDownX] = useState(0);

  const handleMouseDown = ({ clientY, clientX }) => {
    setIsDraggable(true);
    setMouseDownY(clientY);
    setMouseDownX(clientX);
  };

  const handleMouseMove = ({ clientY, clientX }) => {
    if (isDraggable) {
      onChange({
        valueY: value + clientY - mouseDownY,
        valueX: value + clientX - mouseDownX,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDraggable(false);
  };

  useEffect(handleEventListener("mousedown", handleMouseDown), [isDraggable]);
  useEffect(handleEventListener("mousemove", handleMouseMove), [isDraggable]);
  useEffect(handleEventListener("mouseup", handleMouseUp), [isDraggable]);

  return <RangeDial onMouseDown={handleMouseDown} left={value}></RangeDial>;
};

export { DraggableComponent };
