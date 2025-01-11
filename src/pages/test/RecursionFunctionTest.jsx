const RecursionFunctionTest = () => {
  const recursionFunction = (number) => {
    if (number <= 1) {
      return number;
    } else {
      return 2 * recursionFunction(number - 1);
    }
  };

  return (
    <div>
      <p>{recursionFunction(4)}</p>
    </div>
  );
};

export { RecursionFunctionTest };
