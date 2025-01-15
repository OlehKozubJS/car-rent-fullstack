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
      <p>Square of 0: {recursionFunction(0)}</p>
      <p>Square of 1: {recursionFunction(1)}</p>
      <p>Square of 2: {recursionFunction(2)}</p>
      <p>Square of 3: {recursionFunction(3)}</p>
      <p>Square of 4: {recursionFunction(4)}</p>
      <p>Square of 5: {recursionFunction(5)}</p>
      <p>Square of 6: {recursionFunction(6)}</p>
      <p>Square of 7: {recursionFunction(7)}</p>
      <p>Square of 8: {recursionFunction(8)}</p>
      <p>Square of 9: {recursionFunction(9)}</p>
      <p>Square of 10: {recursionFunction(10)}</p>
    </div>
  );
};

export { RecursionFunctionTest };
