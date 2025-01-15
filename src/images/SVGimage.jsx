import icons from "./icons.svg";
import styled from "@emotion/styled";

const SVGimageStyleBase = styled.svg`
  display: block;
  width: 24px;
  height: 24px;
`;

const SVGimage = ({ name }) => {
  return (
    <svg className={css.Icon}>
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  );
};

export { SVGimage };
