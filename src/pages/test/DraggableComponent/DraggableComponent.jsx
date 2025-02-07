import { useEffect, useState } from "react";

import { handleEventListener } from "../../../hooks";

import { DraggableComponentStyle } from "./DraggableComponentStyle";

const DraggableComponent = ({
  onChange,
  valueY,
  valueX,
  height,
  width,
  backgroundColor,
}) => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [mouseDownY, setMouseDownY] = useState(valueY);
  const [mouseDownX, setMouseDownX] = useState(valueX);

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

  useEffect(handleEventListener("mousemove", handleMouseMove), [isDraggable]);
  useEffect(handleEventListener("mouseup", handleMouseUp), [isDraggable]);

  return (
    <DraggableComponentStyle
      onMouseDown={handleMouseDown}
      top={valueY}
      left={valueX}
      height={height}
      width={width}
      backgroundColor={backgroundColor}
    ></DraggableComponentStyle>
  );
};

export { DraggableComponent };
