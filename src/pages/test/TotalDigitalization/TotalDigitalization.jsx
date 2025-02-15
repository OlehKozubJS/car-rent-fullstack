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
      query
        .split("")
        .map((character) => {
          let binaryDigit = db.indexOf(character);
          if (binaryDigit < 10) {
            binaryDigit = "0" + binaryDigit;
          }
          return String(binaryDigit);
        })
        .join("")
    );
  };

  const transformDigitsToText = () => {
    setResult(
      query
        .split("")
        .reduce((total, character, characterIndex) => {
          let newTotal = total + character;

          if (characterIndex % 2 === 1) {
            newTotal += " ";
          }

          return newTotal;
        }, "")
        .split(" ")
        .map((character) => {
          return db[Number(character)];
        })
        .join("")
    );
  };

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
      <p>{result}</p>
    </div>
  );
};

export { TotalDigitalization };
