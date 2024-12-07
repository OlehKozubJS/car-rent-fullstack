import { useState, useEffect } from "react";

import styled from "@emotion/styled";

import { carsLocalData } from "./imports";

const CheapTrick = styled.section`
  width: inherit;
  height: auto;
  background-color: inherit;
`;

const MygerPage = () => {
  const [isMygerPage, setIsMygerPage] = useState(false);

  const openMygerPage = () => {
    setIsMygerPage(true);
  };

  const closeMygerPage = () => {
    setIsMygerPage(false);
  };

  //onSubmit({ make, minRentalPrice, maxRentalPrice, minMileage, maxMileage });

  return (
    <CheapTrick>
      <div>
        <div>pridurok</div>
      </div>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </CheapTrick>
  );
};

export { MygerPage };
