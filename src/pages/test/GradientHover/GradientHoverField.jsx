import { GradientHover } from "./GradientHover";

import { GradientHoverFieldStyleBase } from "./GradientHoverFieldStyle";

const GradientHoverField = () => {
  return (
    <div>
      <GradientHoverFieldStyleBase>
        Gradient hover
        <GradientHover
          onMouseOver={handleMouseOver}
          backgroundimage={setLinearGradient(gradientLeft)}
        ></GradientHover>
      </GradientHoverFieldStyleBase>
    </div>
  );
};

export { GradientHoverField };
