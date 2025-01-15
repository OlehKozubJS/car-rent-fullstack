const setLinearGradient = (gradientLeft) => {
  return `linear-gradient(
    to right,
  rgba(255, 255, 255, 0),
  rgba(255, 255, 255, 0)
    ${gradientLeft}px,
  rgba(255, 255, 255, 1)
    ${gradientLeft + 20}px,
  rgba(255, 255, 255, 1)
    ${gradientLeft + 10}px,
  rgba(255, 255, 255, 0)
    ${gradientLeft + 20}px
  );`;
};

export { setLinearGradient };
