import { useState } from "react";

const ScrollRangeTest = () => {
  const [isDraggable, setIsdraggable] = useState(false);
  const [mouseDownY, setMouseDownY] = useState(0);
  const [valueY, setValueY] = useState(0);

  const handleMouseDown = (event) => {};
  const handleMouseUp = (event) => {};
  const handleMouseMove = (event) => {};
  const handleMouseLeave = (event) => {};

  return (
    <>
      <div style={{ width: "10px", height: "500px", backgroundColor: "cyan" }}>
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ wigth: "10px", height: "250px", backgroundColor: "blue" }}
        ></div>
      </div>
      <p>{!isDraggable && "not "}draggable</p>
      <p>{mouseDownY}</p>
      <p>{valueY}</p>
    </>
  );
};

export { ScrollRangeTest };
