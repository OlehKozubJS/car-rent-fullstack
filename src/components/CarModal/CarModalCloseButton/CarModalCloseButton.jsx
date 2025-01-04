import { useState, useEffect } from "react";

import { SVGimage } from "../imports";

import { CarModalCloseButtonStyleBase } from "./CarModalCloseButtonStyle";

const CarModalCloseButton = ({ onClose }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.type === "keydown" && event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <CarModalCloseButtonStyleBase
      onClick={onClose}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <SVGimage name={isHover ? "close-hover" : "close"} />
    </CarModalCloseButtonStyleBase>
  );
};

export { CarModalCloseButton };
