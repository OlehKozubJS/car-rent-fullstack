import { useEffect, useState } from "react";
import { css, Global } from "@emotion/react";

const ScrollRange = ({ value, onChange }) => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [mouseDownY, setMouseDownY] = useState(0);

  const handleMouseDown = (event) => {
    const cursorY = event.clientY;
    setIsDraggable(true);
    setMouseDownY(cursorY);
  };

  const handleMouseMove = (event) => {
    event.preventDefault();

    if (isDraggable) {
      const cursorY = event.clientY;
      const oldValue = value;
      const newValue = cursorY - mouseDownY + oldValue;
      if (newValue >= 0 && newValue <= 122) {
        onChange(newValue);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggable(false);
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDraggable]);

  return (
    <>
      <Global
        styles={{
          ".scroll-range-stator": {
            height: "244px",
            width: "8px",

            position: "relative",
          },

          ".scroll-range-rotor": {
            position: "absolute",
            height: "122px",
            width: "8px",
            top: `${value}px`,
            right: "0px",

            backgroundColor: "rgba(18, 20, 23, 0.05)",

            borderRadius: "10px",
          },
        }}
      />
      <div className="scroll-range-stator">
        <div onMouseDown={handleMouseDown} className="scroll-range-rotor"></div>
      </div>
    </>
  );
};

export { ScrollRange };
