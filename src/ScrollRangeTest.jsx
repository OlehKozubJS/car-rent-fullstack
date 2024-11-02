import { useEffect, useState } from "react";

const ScrollRangeTest = () => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [mouseDownY, setMouseDownY] = useState(0);
  const [valueY, setValueY] = useState(0);

  const handleMouseDown = (event) => {
    const cursorY = event.clientY;
    setIsDraggable(true);
    setMouseDownY(cursorY - valueY);
  };

  const handleMouseMove = (event) => {
    event.preventDefault();

    if (isDraggable) {
      const cursorY = event.clientY;
      const newValueY = cursorY - mouseDownY;
      if (newValueY >= 0 && newValueY <= 250) {
        setValueY(newValueY);
      }
    }
  };

  const handleMouseUp = (event) => {
    setIsDraggable(false);
  };

  const resetRange = () => {
    setValueY(0);
  };

  useEffect(() => {
    const stopDraggingWhenMouseUp = () => {
      setIsDraggable(false);
    };

    window.addEventListener("mouseup", stopDraggingWhenMouseUp);

    return () => {
      window.removeEventListener("mouseup", stopDraggingWhenMouseUp);
    };
  }, []);

  return (
    <>
      <button type="button" onClick={resetRange}>
        Reset
      </button>
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
          style={{
            width: "100px",
            height: "250px",
            backgroundColor: "blue",
            position: "absolute",
            top: `${valueY}px`,
            left: "0px",
          }}
        ></div>
      </div>
      <p>{!isDraggable && "not "}draggable</p>
      <p>{mouseDownY}</p>
      <p>{valueY}</p>
    </>
  );
};

export { ScrollRangeTest };
