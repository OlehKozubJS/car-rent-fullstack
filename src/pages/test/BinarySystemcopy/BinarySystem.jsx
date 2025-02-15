import { useState } from "react";

const BinarySystem = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleQuery = ({ target }) => {
    setQuery(target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Enter a number" onChange={handleQuery} />
      <button>Decimal to binary</button>
      <button>Binary to decimal</button>
      <p>{result}</p>
      {query}
    </div>
  );
};

export { BinarySystem };
