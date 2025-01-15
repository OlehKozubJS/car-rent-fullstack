import { useState, useEffect } from "react";

import {
  GradientHoverTestComponentStyleBase,
  GradientHoverGradientComponentStyleBase,
} from "./GradientHoverStyle";

const GradientHover = () => {
  const handleMouseOver = () => {};

  return (
    <div>
      <GradientHoverTestComponentStyleBase
        gradientleft={30}
        onMouseOver={handleMouseOver}
      >
        Gradient hover
        <GradientHoverGradientComponentStyleBase></GradientHoverGradientComponentStyleBase>
      </GradientHoverTestComponentStyleBase>
    </div>
  );
};

export { GradientHover };
