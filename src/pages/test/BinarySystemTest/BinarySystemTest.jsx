import { useState } from "react";

const dtb = (query) => {
  if (query === 0) {
    return "";
  } else {
    const binaryDigit = query % 2;
    const newQuotient = Math.floor(query / 2);
    return dtb(newQuotient) + binaryDigit;
  }
};

const BinarySystemTest = () => {
  const [query, setQuery] = useState(0);
  const [result, setResult] = useState();

  const handleQuery = ({ target }) => {
    setQuery(Number(target.value));
  };

  const transformDecimalToBinary = () => {
    if (query === 0) {
      setResult("");
    } else {
      const binaryDigit = query % 2;
      const newQuotient = Math.floor(query / 2);
      return setResult(transformDecimalToBinary(newQuotient) + binaryDigit);
    }
  };

  const transformBinaryToDecimal = () => {};

  return (
    <div>
      <input type="text" placeholder="Enter a number" onChange={handleQuery} />
      <button onClick={transformDecimalToBinary}>Decimal to binary</button>
      <button onClick={transformBinaryToDecimal}>Binary to decimal</button>
      <p>
        {[...query.split("")].sort((a, b) => Number(b) - Number(a)).join("")}
      </p>
    </div>
  );
};

export { BinarySystemTest };
