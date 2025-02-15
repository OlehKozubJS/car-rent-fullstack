import { useState } from "react";

const TotalDigitalization = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const transformTextToDigits = () => {};

  const transformDigitsToText = () => {};

  return (
    <div>
      <div>
        <textarea />
        <button onClick={transformTextToDigits}>Text to digits</button>
        <button onClick={transformDigitsToText}>Digits to text</button>
      </div>
      <p></p>
    </div>
  );
};

export { TotalDigitalization };
