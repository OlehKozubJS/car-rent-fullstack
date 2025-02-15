import { useState } from "react";

const dtb = (query, result) => {
  if (query <= 1) {
    return Number(String(query));
  } else {
    console.log(Number(String(dtb(query % 2, result)) + String(result)));
    return Number(String(dtb(query % 2, result)) + String(result));
  }
};

const BinarySystemTest = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleQuery = ({ target }) => {
    setQuery(target.value);
  };

  const transformDecimalToBinary = () => {
    setResult(dtb(Number(result)));
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
