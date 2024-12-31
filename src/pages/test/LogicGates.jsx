import { useEffect, useState } from "react";

const LogicGates = () => {
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

  const nor = (a, b) => {
    return !(a || b);
  };

  useEffect(() => {
    const valOneAB = nor(inputA, inputB);
    const valTwoA = nor(inputA, valOneAB);
    const valTwoB = nor(valOneAB, inputB);
    const valThreeAB = nor(valTwoA, valTwoB);
    const valFourAB = nor(valThreeAB, valThreeAB);

    setOutput(valFourAB);
  }, [inputA, inputB, inputC]);

  return (
    <section>
      This is test page
      <button type="button" onClick={(inputA && handleFalseA) || handleTrueA}>
        A: {(inputA && "true") || "false"}
      </button>
      <button type="button" onClick={(inputB && handleFalseB) || handleTrueB}>
        B: {(inputB && "true") || "false"}
      </button>
      <button type="button" onClick={(inputC && handleFalseC) || handleTrueC}>
        C: {(inputC && "true") || "false"}
      </button>
      <p>{(output && "true") || "false"}</p>
    </section>
  );
};

export { LogicGates };
