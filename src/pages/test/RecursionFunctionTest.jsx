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
      <p>{recursionFunction(0)}</p>
      <p>{recursionFunction(1)}</p>
      <p>{recursionFunction(2)}</p>
      <p>{recursionFunction(3)}</p>
      <p>{recursionFunction(4)}</p>
      <p>{recursionFunction(5)}</p>
      <p>{recursionFunction(6)}</p>
      <p>{recursionFunction(7)}</p>
      <p>{recursionFunction(8)}</p>
      <p>{recursionFunction(9)}</p>
      <p>{recursionFunction(10)}</p>
    </div>
  );
};

export { RecursionFunctionTest };
