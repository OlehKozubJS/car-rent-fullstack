import { useState } from "react";

const BinarySystem = () => {
  return (
    <div>
      <input type="text" placeholder="Enter a number" />
      <button>Decimal to binary</button>
      <button>Binary to decimal</button>
      <p></p>
    </div>
  );
};

export { BinarySystem };
