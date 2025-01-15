const RecursionFunctionTest = () => {
  const recursionFunction = (number) => {
    if (number <= 0) {
      return number;
    } else {
      return 2 * number - 1 + recursionFunction(number - 1);
    }
  };

  return (
    <div>
      <p>{recursionFunction(5)}</p>
    </div>
  );
};

export { RecursionFunctionTest };
