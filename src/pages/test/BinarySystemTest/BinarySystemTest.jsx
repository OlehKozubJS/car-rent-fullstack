import { useState } from "react";

const BinarySystemTest = () => {
  const [query, setQuery] = useState(0);
  const [result, setResult] = useState();

  const handleQuery = ({ target }) => {
    setQuery(Number(target.value));
  };

  const transformDecimalToBinary = () => {
    if (query === 0) {
      setResult("");
    } else {
      const binaryDigit = query % 2;
      setQuery(Math.floor(query / 2));
      setResult(transformDecimalToBinary() + binaryDigit);
    }
  };

  const transformBinaryToDecimal = () => {
    setResult(
      [...query.split("")].sort((a, b) => Number(b) - Number(a)).join("")
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
