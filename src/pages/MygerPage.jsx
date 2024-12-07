import { useState, useEffect } from "react";

import styled from "@emotion/styled";

import { carsLocalData } from "./imports";

const CheapTrick = styled.section`
  height: 500px;
  background-color: black;
  position: relative;
`;

const JustAnotherDiv = styled.div`
  top: 200px;
  left: 200px;
  position: absolute;
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
      <JustAnotherDiv></JustAnotherDiv>
      <div>
        <div></div>
      </div>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </CheapTrick>
  );
};

export { MygerPage };
