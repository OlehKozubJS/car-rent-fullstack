import { useState } from "react";

const BinarySystemTest = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleQuery = ({ target }) => {
    setQuery(target.value);
  };

  const transformDecimalToBinary = () => {};

  const transformBinaryToDecimal = () => {};

  return (
    <div>
      <input type="text" placeholder="Enter a number" onChange={handleQuery} />
      <button onClick={transformDecimalToBinary}>Decimal to binary</button>
      <button onClick={transformBinaryToDecimal}>Binary to decimal</button>
      <p>{result}</p>
      {query}
    </div>
  );
};

export { BinarySystemTest };
