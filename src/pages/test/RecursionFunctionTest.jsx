const RecursionFunctionTest = () => {
  const fibonacciFunction = (number) => {
    if (number <= 1) {
      return number;
    } else {
      return number * fibonacciFunction(number - 1);
    }
  };

  return (
    <div>
      <p>{fibonacciFunction(5)}</p>
    </div>
  );
};

export { RecursionFunctionTest };
