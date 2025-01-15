import { useState, useEffect } from "react";

import { handleEventListener } from "../../../hooks";

import {
  GradientHoverTestComponentStyleBase,
  GradientHoverGradientComponentStyleBase,
} from "./GradientHoverStyle";

const GradientHover = () => {
  const [isGradientAnimation, setIsGradientAnimation] = useState(false);

  const gradientAnimation = () => {};

  const handleMouseOver = () => {
    setIsGradientAnimation(true);
  };

  useEffect(handleEventListener(handleEventListener), [isGradientAnimation]);

  return (
    <div>
      <GradientHoverTestComponentStyleBase onMouseOver={handleMouseOver}>
        Gradient hover
        <GradientHoverGradientComponentStyleBase
          backgroundImage={"none"}
        ></GradientHoverGradientComponentStyleBase>
      </GradientHoverTestComponentStyleBase>
    </div>
  );
};

export { GradientHover };
