const RecursionFunctionTest = () => {
  const fibonacciFunction = (number) => {
    if (number <= 1) {
      return number;
    } else {
      console.log(
        fibonacciFunction(number - 1) + fibonacciFunction(number - 2)
      );
      return fibonacciFunction(number - 1) + fibonacciFunction(number - 2);
    }
  };

  return (
    <div>
      <p>{fibonacciFunction(10)}</p>
    </div>
  );
};

export { RecursionFunctionTest };
