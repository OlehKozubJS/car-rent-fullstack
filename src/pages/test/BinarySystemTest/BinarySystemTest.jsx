import { useState } from "react";

const dtb = (query, result) => {
  if (query <= 1) {
    return query + result;
  } else {
    return transformDecimalToBinary(query % 2) + result;
  }
};

const BinarySystemTest = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleQuery = ({ target }) => {
    setQuery(target.value);
  };

  const transformDecimalToBinary = () => {
    if (Number(query) <= 1) {
      setResult(query + result);
    } else {
      setResult(transformDecimalToBinary(String(Number(query) % 2) + result));
    }
  };

  const transformBinaryToDecimal = () => {};

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
