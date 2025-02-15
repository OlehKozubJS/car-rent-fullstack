import { useState } from "react";

import db from "./totalDigitalizationDB.json";
import ucl from "./uaCyrillicLatinDB.json";
import rcl from "./ruCyrillicLatinDB.json";

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
        .reduce((total, character, characterIndex, characterArray) => {
          let newTotal = total + character;

          if (
            characterIndex % 2 === 1 &&
            characterIndex !== characterArray.length - 1
          ) {
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

  const transformCyrillicToLatin = () => {
    setResult(
      query.split("").map((character) => {
        return Object.keys();
      })
    );
  };

  return (
    <div>
      <div>
        <button
          onClick={transformTextToDigits}
          type="button"
          style={{
            backgroundColor: "rgb(0, 0, 200)",
            color: "rgb(255, 255, 55)",
          }}
        >
          Text to digits
        </button>
        <button
          onClick={transformDigitsToText}
          type="button"
          style={{
            backgroundColor: "rgb(0, 0, 200)",
            color: "rgb(255, 255, 55)",
          }}
        >
          Digits to text
        </button>
        <button
          onClick={transformRussianCyrillicToLatin}
          type="button"
          style={{
            backgroundColor: "rgb(0, 0, 200)",
            color: "rgb(255, 255, 55)",
          }}
        >
          Russian Cyrillic to Latin
        </button>
        <button
          onClick={transformUkrainianCyrillicToLatin}
          type="button"
          style={{
            backgroundColor: "rgb(0, 0, 200)",
            color: "rgb(255, 255, 55)",
          }}
        >
          Ukrainian Cyrillic to Latin
        </button>
      </div>
      <textarea
        onChange={handleQuery}
        placeholder="Enter some text or numbers"
        style={{ height: "300px", width: "750px", resize: "none" }}
      />
      <p style={{ width: "750px", overflowWrap: "break-word" }}>{result}</p>
    </div>
  );
};

export { TotalDigitalization };
