import { useState, useEffect } from "react";

import { handleInterval } from "../../../hooks";

import { setLinearGradient } from "./setLinearGradient";

import {
  GradientHoverTestComponentStyleBase,
  GradientHoverGradientComponentStyleBase,
} from "./GradientHoverStyle";

const GradientHover = () => {
  const [isGradientAnimation, setIsGradientAnimation] = useState(false);
  const [parentNodeInformation, setParentnodeInformation] = useState({});
  const [gradientLeft, setGradientLeft] = useState(-40);

  const gradientAnimation = () => {
    if (isGradientAnimation) {
      if (gradientLeft >= parentNodeInformation.offsetWidth + 40) {
        setGradientLeft(-40);
        setIsGradientAnimation(false);
      } else {
        setGradientLeft(gradientLeft + 5);
      }
    }
  };

  const handleMouseOver = (event) => {
    setParentnodeInformation(event.target.parentNode);
    setIsGradientAnimation(true);
  };

  useEffect(() => {
    const animation = setInterval(gradientAnimation, 1);
    if (!isGradientAnimation) {
      clearInterval(animation);
    }
    return () => {
      clearInterval(animation);
    };
  }, [isGradientAnimation, gradientLeft]);

  return (
    <div>
      <GradientHoverTestComponentStyleBase>
        Gradient hover
        <GradientHoverGradientComponentStyleBase
          onMouseOver={handleMouseOver}
          backgroundimage={setLinearGradient(gradientLeft)}
        ></GradientHoverGradientComponentStyleBase>
      </GradientHoverTestComponentStyleBase>
    </div>
  );
};

export { GradientHover };
