import { useEffect, useState } from "react";

import { DraggableComponent } from "./DraggableComponent";

const DraggableComponentField = () => {
  const [valueY, setValueY] = useState(200);
  const [valueX, setValueX] = useState(0);

  const handleXYvalue = ({ valueY, valueX }) => {
    if (valueY >= 200) {
      setValueY(valueY);
    }
    if (valueX >= 0) {
      setValueX(valueX);
    }
  };

  return (
    <section>
      <DraggableComponent
        valueY={valueY}
        valueX={valueX}
        onChange={handleXYvalue}
      />
      <p>valueY={valueY}</p>
      <p>valueX={valueX}</p>
    </section>
  );
};

export { DraggableComponentField };
