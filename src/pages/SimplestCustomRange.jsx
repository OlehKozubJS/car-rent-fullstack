import { useEffect, useState } from "react";

import { handleEventListener } from "./hooks";

import { RangeField, RangeDial } from "./style";

const SimplestCustomRange = ({ stateRangeValue, onChange }) => {
  const dispatch = useDispatch();

  const [isDraggable, setIsDraggable] = useState(false);
  const [rangeValue, setRangeValue] = useState(stateRangeValue);
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
