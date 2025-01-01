import { useEffect, useState } from "react";

import { LogicGates, SimplestCustomRange } from "./test";

const TestPage = () => {
  return (
    <section>
      <SimplestCustomRange />
      <LogicGates />
    </section>
  );
};

export default TestPage;
