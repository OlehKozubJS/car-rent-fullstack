import { useState } from "react";

const TotalDigitalizationButton = () => {
  const transformTextToDigits = () => {
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
          onClick={transformUkrainianCyrillicToLatin}
          type="button"
          style={{
            backgroundColor: "rgb(0, 0, 200)",
            color: "rgb(255, 255, 55)",
          }}
        >
          Ukrainian Cyrillic to Latin
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
      </div>
      <textarea
        onChange={handleQuery}
        placeholder="Enter some text or numbers"
        style={{ height: "300px", width: "750px", resize: "none" }}
      />
    </div>
  );
};

export { TotalDigitalizationButton };
