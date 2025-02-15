import { useState } from "react";

const BinarySystem = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  return (
    <div>
      <input type="text" placeholder="Enter a number" />
      <button>Decimal to binary</button>
      <button>Binary to decimal</button>
      <p>{}</p>
    </div>
  );
};

export { BinarySystem };
