import { SVGimage } from "./imports";

const FontsAndSVGimagesTest = () => {
  return (
    <div>
      <span style={{ fontFamily: "manrope-regular" }}>Regular</span>
      <span style={{ fontFamily: "manrope-medium" }}>Medium</span>
      <span style={{ fontFamily: "manrope-semibold" }}>Semibold</span>
      <span style={{ fontFamily: "montserrat-regular" }}>Regular</span>
      <span style={{ fontFamily: "montserrat-semibold" }}>Semibold</span>
      <div style={{ backgroundColor: "black" }}>
        <SVGimage name="fav" />
      </div>
    </div>
  );
};

export default FontsAndSVGimagesTest;
