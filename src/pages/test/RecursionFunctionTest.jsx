const RecursionFunctionTest = () => {
  const recursionFunction = (number) => {
    if (number <= 1) {
      return number;
    } else {
      return number + recursionFunction(2 * number - 3);
    }
  };

  return (
    <div>
      <p>{recursionFunction(5)}</p>
    </div>
  );
};

export { RecursionFunctionTest };
