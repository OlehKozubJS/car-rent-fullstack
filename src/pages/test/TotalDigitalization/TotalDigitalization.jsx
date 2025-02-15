import { useState } from "react";

import db from "./totalDigitalizationDB.json";

const TotalDigitalization = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleQuery = ({ target }) => {
    setQuery(target.value);
  };

  const transformTextToDigits = () => {};

  const transformDigitsToText = () => {};

  return (
    <div>
      <div>
        <textarea onClick={handleQuery} />
        <button onClick={transformTextToDigits}>Text to digits</button>
        <button onClick={transformDigitsToText}>Digits to text</button>
      </div>
      <p>{query}</p>
    </div>
  );
};

export { TotalDigitalization };
