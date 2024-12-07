import { useState, useEffect } from "react";

import styled from "@emotion/styled";

import { carsLocalData } from "./imports";

const cheapTrick = styled.section``;

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
    <section>
      <div>
        <div></div>
      </div>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </section>
  );
};

export { MygerPage };
