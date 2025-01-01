import { useEffect, useState } from "react";

import { handleEventListener } from "../../hooks";

import styled from "@emotion/styled";

const RangeField = styled.div`
  width: 500px;
  height: 50px;
  background-color: rgb(200, 200, 250);

  position: relative;
`;

const RangeDial = styled.div`
  position: absolute;
  top: 0;
  left: ${({ left }) => {
    return left;
  }}px;
  width: 50px;
  height: 50px;
  background-color: rgb(100, 100, 250);
`;

const SimplestCustomRange = ({ value, onChange }) => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [rangeValue, setRangeValue] = useState(value);
  const [mouseDownX, setMouseDownX] = useState(0);

  const handleMouseDown = ({ clientX }) => {
    setIsDraggable(true);
    setMouseDownX(clientX);
  };

  const handleMouseMove = ({ clientX }) => {
    if (!isDraggable) {
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
