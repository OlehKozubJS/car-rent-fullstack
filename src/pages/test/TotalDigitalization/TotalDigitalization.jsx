import { useState } from "react";

import db from "./totalDigitalizationDB.json";

const TotalDigitalization = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleQuery = ({ target }) => {};

  const transformTextToDigits = () => {};

  const transformDigitsToText = () => {};

  return (
    <div>
      <div>
        <textarea onClick={handleQuery} />
        <button onClick={transformTextToDigits}>Text to digits</button>
        <button onClick={transformDigitsToText}>Digits to text</button>
      </div>
      <p>{db.length}</p>
    </div>
  );
};

export { TotalDigitalization };
