import { useEffect, useState } from "react";

import { handleEventListener } from "../../hooks";

import { DraggableComponentStyle } from "./SimplestCustomRangeStyle";

const DraggableComponent = ({ valueY, valueX, onChange }) => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [mouseDownY, setMouseDownY] = useState(201);
  const [mouseDownX, setMouseDownX] = useState(0);

  const handleMouseDown = ({ clientY, clientX }) => {
    setIsDraggable(true);
    setMouseDownY(clientY);
    setMouseDownX(clientX);
  };

  const handleMouseMove = ({ clientY, clientX }) => {
    if (isDraggable) {
      onChange({
        valueY: valueY + clientY - mouseDownY,
        valueX: valueX + clientX - mouseDownX,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDraggable(false);
  };

  useEffect(handleEventListener("mousedown", handleMouseDown), [isDraggable]);
  useEffect(handleEventListener("mousemove", handleMouseMove), [isDraggable]);
  useEffect(handleEventListener("mouseup", handleMouseUp), [isDraggable]);

  return (
    <DraggableComponentStyle
      onMouseDown={handleMouseDown}
      top={valueY}
      left={valueX}
    ></DraggableComponentStyle>
  );
};

export { DraggableComponent };
