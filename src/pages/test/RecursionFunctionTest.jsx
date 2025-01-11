const RecursionFunctionTest = () => {
  const recursionFunction = (number) => {
    if (number <= 0) {
      return number;
    } else {
      return number + recursionFunction(number - 1);
    }
  };

  return (
    <div>
      <p>{recursionFunction(3)}</p>
    </div>
  );
};

export { RecursionFunctionTest };
