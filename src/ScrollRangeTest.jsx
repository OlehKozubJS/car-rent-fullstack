import { useState } from "react";

const ScrollRangeTest = () => {
  const rangeRotorStyle = {
    wigth: "100px",
    height: "250px",
    backgroundColor: "blue",
    position: "absolute",
    top: "20px",
    left: "20px",
  };
  const [isDraggable, setIsDraggable] = useState(false);
  const [mouseDownY, setMouseDownY] = useState(0);
  const [valueY, setValueY] = useState(0);

  const handleMouseDown = (event) => {
    const cursorY = event.clientY;
    setIsDraggable(true);
    setMouseDownY(cursorY - valueY);
  };

  const handleMouseUp = (event) => {
    const cursorY = event.clientY;
    setValueY(cursorY - mouseDownY);
  };

  const handleMouseMove = (event) => {
    setIsDraggable(false);
  };

  const handleMouseLeave = (event) => {
    setIsDraggable(false);
  };

  return (
    <>
      <div
        style={{
          width: "100px",
          height: "500px",
          backgroundColor: "cyan",
          position: "relative",
        }}
      >
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={rangeRotorStyle}
        ></div>
      </div>
      <p>{!isDraggable && "not "}draggable</p>
      <p>{mouseDownY}</p>
      <p>{valueY}</p>
    </>
  );
};

export { ScrollRangeTest };
