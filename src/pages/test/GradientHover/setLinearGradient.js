const setLinearGradient = (gradientLeft) => {
  `background-image: linear-gradient(
    to right,
  rgba(255, 255, 255, 0),
  rgba(255, 255, 255, 0)
    ${rgradientLeft}px,
  rgba(255, 255, 255, 1)
    ${gradientLeft}px,
  rgba(255, 255, 255, 1)
    ${gradientLeft}px,
  rgba(255, 255, 255, 0)
    ${gradientLeft}px
  );`;
};

export { setLinearGradient };
