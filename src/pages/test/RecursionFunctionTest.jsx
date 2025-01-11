const RecursionFunctionTest = () => {
  const fibonacciFunction = (number) => {
    if (number <= 1) {
      return number;
    } else {
      return fibonacciFunction(number - 1);
    }
  };

  return (
    <div>
      <p>{fibonacciFunction(10)}</p>
    </div>
  );
};

export { RecursionFunctionTest };
