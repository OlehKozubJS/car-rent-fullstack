import { useState, useEffect } from "react";

import { handleEventListener } from "../../../hooks";

import { setLinearGradient } from "./setLinearGradient";

import {
  GradientHoverTestComponentStyleBase,
  GradientHoverGradientComponentStyleBase,
} from "./GradientHoverStyle";

const GradientHover = () => {
  const [isGradientAnimation, setIsGradientAnimation] = useState(false);
  const [parentNode, setParentnode] = useState({});
  const [gradientLeft, setGradientLeft] = useState(-40);

  const gradientAnimation = () => {
    if (isGradientAnimation) {
      setIsGradientAnimation(false);
    }
  };

  const handleMouseOver = (event) => {
    setParentnode(event.target.parentNode);
    setIsGradientAnimation(true);
  };

  useEffect(handleEventListener(gradientAnimation, 100), [isGradientAnimation]);

  return (
    <div>
      <GradientHoverTestComponentStyleBase onMouseOver={handleMouseOver}>
        Gradient hover
        <GradientHoverGradientComponentStyleBase
          backgroundimage={setLinearGradient(gradientLeft)}
        ></GradientHoverGradientComponentStyleBase>
      </GradientHoverTestComponentStyleBase>
    </div>
  );
};

export { GradientHover };
