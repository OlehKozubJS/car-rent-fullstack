const RecursionFunctionTest = () => {
  const recursionFunction = (number) => {
    if (number <= 1) {
      return number;
    } else {
      return number + recursionFunction(number - 1);
    }
  };

  return (
    <div>
      <p>{recursionFunction(7)}</p>
    </div>
  );
};

export { RecursionFunctionTest };
