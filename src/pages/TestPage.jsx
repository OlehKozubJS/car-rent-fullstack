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
      <button>{inputA}</button>
      <button>{inputB}</button>
      <button>{inputC}</button>
      <p>{output}</p>
    </section>
  );
};

export default TestPage;
