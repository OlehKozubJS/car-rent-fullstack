import { useEffect, useState } from "react";

const TestPage = () => {
  const [inputA, setInputA] = useState();
  const [inputB, setInputB] = useState();
  const [inputC, setInputC] = useState();

  useEffect(() => {}, []);

  return <section>This is test page</section>;
};

export default TestPage;
