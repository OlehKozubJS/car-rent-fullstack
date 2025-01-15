import { useState } from "react";

import { CustomRange } from "./CustomRange";

const CustomRangeField = () => {
  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeValue = (newRangeValue) => {
    setRangeValue(newRangeValue);
  };

  return (
    <section>
      <CustomRange onChange={handleRangeValue} value={rangeValue} />
      <p>{rangeValue}</p>
    </section>
  );
};

export { CustomRangeField };
