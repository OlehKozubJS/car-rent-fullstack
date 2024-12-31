import { useEffect, useState } from "react";

const TestPage = () => {
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);
  const [inputC, setInputC] = useState(false);
  const [output, setOutput] = useState(false);

  const handleTrueA = () => {
    setInputA(true);
  };
  const handleFalseA = () => {
    setInputA(false);
  };
  const handleTrueB = () => {
    setInputB(true);
  };
  const handleFalseB = () => {
    setInputB(false);
  };
  const handleTrueC = () => {
    setInputC(true);
  };
  const handleFalseC = () => {
    setInputC(false);
  };

  useEffect(() => {}, []);

  return (
    <section>
      This is test page
      <button type="button" onClick={(inputA && handleTrueA) || handleFalseA}>
        A: {(inputA && "true") || "false"}
      </button>
      <button type="button" onClick={(inputB && handleTrueB) || handleFalseB}>
        B: {(inputB && "true") || "false"}
      </button>
      <button type="button" onClick={(inputC && handleTrueC) || handleFalseC}>
        C: {(inputC && "true") || "false"}
      </button>
      <p>{output}</p>
    </section>
  );
};

export default TestPage;
