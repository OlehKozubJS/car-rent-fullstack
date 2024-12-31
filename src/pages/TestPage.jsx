import { useEffect, useState } from "react";

const TestPage = () => {
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);
  const [inputC, setInputC] = useState(false);
  const [output, setOutput] = useState(false);

  const handleTrueA = () => {};
  const handleFalseA = () => {};
  const handleTrueB = () => {};
  const handleFalseB = () => {};
  const handleTrueC = () => {};
  const handleFalseC = () => {};

  useEffect(() => {}, []);

  return (
    <section>
      This is test page
      <form></form>
      <p>{output}</p>
    </section>
  );
};

export default TestPage;
