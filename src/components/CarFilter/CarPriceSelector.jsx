import { useState, useEffect } from "react";

const CarPriceSelector = ({ cars }) => {
  const [carBrands] = useState(cars);

  return (
    <div>
      <h3>Car price / dollars</h3>

      <label htmlFor="mileageFrom">
        <input id="mileageFrom" type="number" placeholder="From" />
      </label>

      <label htmlFor="mileageTo">
        <input id="mileageTo" type="number" placeholder="To" />
      </label>
    </div>
  );
};

export { CarPriceSelector };
