import { useState } from "react";

const BinarySystemTest = () => {
  const [query, setQuery] = useState(0);
  const [result, setResult] = useState();

  const handleQuery = ({ target }) => {
    setQuery(Number(target.value));
  };

  const dtb = (query) => {
    if (query === 0) {
      return "";
    } else {
      const binaryDigit = query % 2;
      const newQuotient = Math.floor(query / 2);
      return dtb(newQuotient) + binaryDigit;
    }
  };

  const transformDecimalToBinary = () => {
    setResult(dtb(query));
  };

  const transformBinaryToDecimal = () => {
    setResult(
      String(
        [
          ...String(query)
            .split("")
            .map((number) => {
              Number(number);
            }),
        ]
          .sort((a, b) => b - a)
          .reduce((total, number, index) => {
            console.log(total);
            return total + number * Math.pow(2, index);
          }, 0)
      )
    );
  };

  return (
    <div>
      <input type="text" placeholder="Enter a number" onChange={handleQuery} />
      <button onClick={transformDecimalToBinary}>Decimal to binary</button>
      <button onClick={transformBinaryToDecimal}>Binary to decimal</button>
      <p>{result}</p>
    </div>
  );
};

export { BinarySystemTest };
