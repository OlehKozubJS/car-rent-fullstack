const RecursionFunctionTest = () => {
  const fibonacciFunction = (number) => {
    let fibonacciArray = [];

    if (number <= 1) {
      fibonacciArray = [...fibonacciArray, number];
      return fibonacciArray;
    } else {
      fibonacciArray = [
        ...fibonacciArray,
        fibonacciFunction(number - 1) + fibonacciFunction(number - 2),
      ];
    }
  };

  return (
    <div>
      <p></p>
    </div>
  );
};

export { RecursionFunctionTest };
