import { useState } from "react";

const TotalDigitalizationButton = () => {
  return (
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
  );
};

export { TotalDigitalizationButton };
