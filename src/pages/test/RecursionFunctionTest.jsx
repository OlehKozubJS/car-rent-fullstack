const RecursionFunctionTest = () => {
  const recursionFunction = (number) => {
    if (number <= 1) {
      return number;
    } else {
      return recursionFunction(number - 1) * 2;
    }
  };

  return (
    <div>
      <p>{recursionFunction(6)}</p>
    </div>
  );
};

export { RecursionFunctionTest };
