import { useState } from "react";

import db from "./totalDigitalizationDB.json";

const TotalDigitalization = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleQuery = ({ target }) => {
    setQuery(target.value);
  };

  const transformTextToDigits = () => {
    setResult(
      query.map((character) => {
        return db.indexOf(character);
      })
    );
  };

  const transformDigitsToText = () => {};

  return (
    <div>
      <div>
        <button
          onClick={transformTextToDigits}
          style={{
            backgroundColor: "rgb(0, 0, 200)",
            color: "rgb(255, 255, 55)",
          }}
        >
          Text to digits
        </button>
        <button
          onClick={transformDigitsToText}
          style={{
            backgroundColor: "rgb(0, 0, 200)",
            color: "rgb(255, 255, 55)",
          }}
        >
          Digits to text
        </button>
      </div>
      <textarea onClick={handleQuery} />
      <p>{query}</p>
    </div>
  );
};

export { TotalDigitalization };
