import icons from "./icons.svg";
import styled from "@emotion/css";

const SVGimage = ({ name }) => {
  return (
    <svg className={css.Icon}>
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  );
};

export { SVGimage };
