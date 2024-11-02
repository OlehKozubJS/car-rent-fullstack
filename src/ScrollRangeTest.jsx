import { useState } from "react";

const ScrollRangeTest = () => {
  const [isDraggable, setIsdraggable] = useState(false);
  const [mouseDownY, setMouseDownY] = useState(0);
  const [valueY, setValueY] = useState(0);

  return (
    <>
      <div style={{ width: "10px", height: "500px", backgroundColor: "cyan" }}>
        <div
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
