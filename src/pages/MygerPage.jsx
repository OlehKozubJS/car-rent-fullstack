import { useState, useEffect } from "react";

import { carsLocalData } from "./imports";

const MygerPage = () => {
  const [isMygerPage, setIsMygerPage] = useState(false);

  const openMygerPage = () => {
    setIsMygerPage(true);
  };

  const closeMygerPage = () => {
    setIsMygerPage(false);
  };

  //onSubmit({ make, minRentalPrice, maxRentalPrice, minMileage, maxMileage });

  return isTestPage ? (
    <div>
      <button type="button" onClick={closeMygerPage}>
        Close myger page
      </button>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  ) : (
    <button type="button" onClick={openMygerPage}>
      Open myger page
    </button>
  );
};

export { MygerPage };
