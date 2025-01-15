const setLinearGradient = (gradientLeft) => {
  return `linear-gradient(
    to right,
  rgba(255, 255, 255, 0),
  rgba(255, 255, 255, 0)
    ${gradientLeft}px,
  rgba(255, 255, 255, 1)
    ${gradientLeft + 20}px,
  rgba(255, 255, 255, 1)
    ${gradientLeft + 30}px,
  rgba(255, 255, 255, 0)
    ${gradientLeft + 50}px
  );`;
};

export { setLinearGradient };
