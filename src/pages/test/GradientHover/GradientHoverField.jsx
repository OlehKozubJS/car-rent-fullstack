import { GradientHover } from "./GradientHover";

import { GradientHoverFieldStyleBase } from "./GradientHoverFieldStyle";

const GradientHoverField = () => {
  return (
    <div>
      <GradientHoverFieldStyleBase>
        Gradient hover
        <GradientHover />
      </GradientHoverFieldStyleBase>
    </div>
  );
};

export { GradientHoverField };
