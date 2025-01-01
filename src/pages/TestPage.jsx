import { useEffect, useState } from "react";

import { LogicGates, SimplestCustomRange } from "./test";

const TestPage = () => {
  const [] = useState();

  return (
    <section>
      <SimplestCustomRange />
      <LogicGates />
      <p></p>
    </section>
  );
};

export default TestPage;
