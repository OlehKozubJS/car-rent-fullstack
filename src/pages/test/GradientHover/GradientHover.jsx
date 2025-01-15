import { useState, useEffect } from "react";

import { GradientHoverTestComponentStyleBase } from "./GradientHoverStyle";

const GradientHover = () => {
  const handleMouseOver = () => {};

  return (
    <div>
      <GradientHoverTestComponentStyleBase
        gradientleft={30}
        onMouseOver={handleMouseOver}
      >
        Gradient hover
      </GradientHoverTestComponentStyleBase>
    </div>
  );
};

export { GradientHover };
