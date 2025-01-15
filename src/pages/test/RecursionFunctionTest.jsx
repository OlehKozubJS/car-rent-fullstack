const RecursionFunctionTest = () => {
  const recursionFunction = (number) => {
    if (number <= 0) {
      return number;
    } else {
      return 2 * number - 1 + recursionFunction(number - 1);
    }
  };

  const recursionFunction2 = (number) => {
    if (number === 0) {
      return 0;
    } else {
      return (
        3 * recursionFunction(number - 1) +
        3 * number -
        2 +
        recursionFunction2(number - 1)
      );
    }
  };

  return (
    <div>
      <p>Square of 0: {recursionFunction2(0)}</p>
      <p>Square of 1: {recursionFunction2(1)}</p>
      <p>Square of 2: {recursionFunction2(2)}</p>
      <p>Square of 3: {recursionFunction2(3)}</p>
      <p>Square of 4: {recursionFunction2(4)}</p>
      <p>Square of 5: {recursionFunction2(5)}</p>
      <p>Square of 6: {recursionFunction2(6)}</p>
      <p>Square of 7: {recursionFunction2(7)}</p>
      <p>Square of 8: {recursionFunction2(8)}</p>
      <p>Square of 9: {recursionFunction2(9)}</p>
      <p>Square of 10: {recursionFunction2(10)}</p>
    </div>
  );
};

export { RecursionFunctionTest };
/*

(x + 1)^3 = (x^2 + 2x + 1)*(x + 1) = x^3 + 2x^2 + x + x^2 + 2x + 1 = x^3 + 3x^2 + 3x + 1

*/
