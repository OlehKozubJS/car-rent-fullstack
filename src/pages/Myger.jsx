import { useState, useEffect } from "react";

import { carsLocalData } from "./imports";

const TestPage = () => {
  const [isTestPage, setIsTestPage] = useState(false);

  const openTestPage = () => {
    setIsTestPage(true);
  };

  const closeTestPage = () => {
    setIsTestPage(false);
  };

  //onSubmit({ make, minRentalPrice, maxRentalPrice, minMileage, maxMileage });

  return isTestPage ? (
    <div>
      <button type="button" onClick={closeTestPage}>
        Close test page
      </button>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  ) : (
    <button type="button" onClick={openTestPage}>
      Open test page
    </button>
  );
};

export { TestPage };
