import { useEffect, useState } from "react";

const TestPage = () => {
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);
  const [inputC, setInputC] = useState(false);

  useEffect(() => {}, []);

  return (
    <section>
      This is test page
      <form></form>
    </section>
  );
};

export default TestPage;
