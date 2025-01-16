import { useState, useEffect } from "react";

import { setLinearGradient } from "./setLinearGradient";

import { GradientHoverStyleBase } from "./GradientHoverStyle";

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
    const animation = setInterval(gradientAnimation, 5);
    if (!isGradientAnimation) {
      clearInterval(animation);
    }
    return () => {
      clearInterval(animation);
    };
  }, [isGradientAnimation, gradientLeft]);

  return (
    <GradientHoverStyleBase
      onMouseOver={handleMouseOver}
      backgroundimage={setLinearGradient(gradientLeft)}
    ></GradientHoverStyleBase>
  );
};

export { GradientHover };
