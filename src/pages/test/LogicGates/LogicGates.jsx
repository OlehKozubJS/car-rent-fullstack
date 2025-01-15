import { useEffect, useState } from "react";

const LogicGates = () => {
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);
  const [inputC, setInputC] = useState(false);
  const [inputD, setInputD] = useState(0);
  const [inputE, setInputE] = useState(0);
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
  const handleValueD = () => {
    const newValueD = inputD + 1;
    if (newValueD === 2) {
      setInputD(-1);
    } else {
      setInputD(newValueD);
    }
  };
  const handleValueE = () => {
    const newValueE = inputE + 1;
    if (newValueE === 2) {
      setInputE(-1);
    } else {
      setInputE(newValueE);
    }
  };

  const nor = (a, b) => {
    return !(a || b);
  };

  const nand = (a, b) => {
    return !(a && b);
  };

  const ternarAND = (a, b) => {
    if (a <= b) {
      return a;
    } else {
      return b;
    }
  };
  const ternarOR = (a, b) => {
    if (a >= b) {
      return a;
    } else {
      return b;
    }
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
    <div>
      <div>
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
      </div>
      <div>
        <button type="button" onClick={handleValueD}>
          D: {inputD}
        </button>
        <button type="button" onClick={handleValueE}>
          E: {inputE}
        </button>
        <p>{ternarAND(inputD, inputE)}</p>
        <p>{ternarOR(inputD, inputE)}</p>
      </div>
    </div>
  );
};

export { LogicGates };
