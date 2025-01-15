import { useState, useEffect } from "react";

import { handleEventListener } from "../../../hooks";

import {
  GradientHoverTestComponentStyleBase,
  GradientHoverGradientComponentStyleBase,
} from "./GradientHoverStyle";

const GradientHover = () => {
  const handleMouseOver = (handleEventListener(handleEventListener), []) => {};

  const gradientAnimation = () => {};

  useEffect();

  return (
    <div>
      <GradientHoverTestComponentStyleBase onMouseOver={handleMouseOver}>
        Gradient hover
        <GradientHoverGradientComponentStyleBase
          gradientleft={30}
        ></GradientHoverGradientComponentStyleBase>
      </GradientHoverTestComponentStyleBase>
    </div>
  );
};

export { GradientHover };
