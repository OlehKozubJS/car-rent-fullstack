import { useState, useEffect } from "react";

import { handleEventListener } from "../../../hooks";

import { setLinearGradient } from "./setLinearGradient";

import {
  GradientHoverTestComponentStyleBase,
  GradientHoverGradientComponentStyleBase,
} from "./GradientHoverStyle";

const GradientHover = () => {
  const [isGradientAnimation, setIsGradientAnimation] = useState(false);
  const [gradientLeft, setGradientLeft] = useState(-40);

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
          backgroundimage={setLinearGradient(-30)}
        ></GradientHoverGradientComponentStyleBase>
      </GradientHoverTestComponentStyleBase>
    </div>
  );
};

export { GradientHover };
