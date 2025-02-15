import { useState } from "react";

const dtb = (query, result) => {
  if (query === 0) {
    return Number(String(query));
  } else {
    const binaryDigit = query % 2;
    const newQuotient = Math.floor(query / 2);
  }
};

const BinarySystemTest = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleQuery = ({ target }) => {
    setQuery(target.value);
  };

  const transformDecimalToBinary = () => {
    setResult(dtb(Number(query), 0));
  };
  //    setResult(dtb(Number(query)));
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
