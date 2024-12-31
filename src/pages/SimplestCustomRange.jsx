import { useEffect, useState } from "react";

import { handleEventListener } from "./hooks";

import { RangeField, RangeDial } from "./style";
/*
.RangeField {
  width: 500px;
  height: 50px;
  background-color: rgb(200, 200, 250);

  position: relative;
}

.RangeDial {
  position: absolute;
  top: 0;

  width: 50px;
  height: 50px;
  background-color: rgb(100, 100, 250);
}

.RangeIndicator {
  color: rgb(0, 0, 250);
}
*/
const SimplestCustomRange = ({ value, onChange }) => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [rangeValue, setRangeValue] = useState(value);
  const [mouseDownX, setMouseDownX] = useState(0);

  const handleMouseDown = (event) => {
    setIsDraggable(true);
    setMouseDownX(event.clientX);
  };

  const handleMouseMove = (event) => {
    event.preventDefault();

    if (!isDraggable) {
      return;
    }

    const mouseMoveX = event.clientX;

    const newRangeValue = rangeValue + mouseMoveX - mouseDownX;

    if (newRangeValue >= 0 && newRangeValue <= 450) {
      setRangeValue(newRangeValue);
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
    <div className={RangeField}>
      <div
        onMouseDown={handleMouseDown}
        style={{ left: rangeValue }}
        className={RangeDial}
      ></div>
    </div>
  );
};

export { SimplestCustomRange };
