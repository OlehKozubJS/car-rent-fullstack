import { useState, useEffect } from "react";

import { CarFilter, CarGallery, CarModal } from "./imports";

const MainPage = ({ cars, carBrands, onFavouriteClick }) => {
  const [isModal, setIsModal] = useState(false);
  const [filteredCars, setFilteredCars] = useState(cars);
  const [car, setCar] = useState(null);

  const openModal = (newCar) => {
    setCar(newCar);
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const handleFilteredCars = ({
    carBrand,
    minMileage,
    maxMileage,
    minPrice,
    maxPrice,
  }) => {
    console.log({ carBrand, minMileage, maxMileage, minPrice, maxPrice });
    setFilteredCars(
      cars.filter(
        ({ make, mileage, rentalPrice }) =>
          (!carBrand || make === carBrand) &&
          (!minMileage || Number(minMileage) <= mileage) &&
          (!maxMileage || Number(maxMileage) >= mileage) &&
          (!minPrice || Number(minPrice) <= rentalPrice) &&
          (!maxPrice || Number(maxPrice) >= rentalPrice)
      )
    );
  };

  return (
    <section>
      {isModal && <CarModal car={car} onClose={closeModal} />}
      <CarFilter carBrands={carBrands} onSubmit={handleFilteredCars} />
      <CarGallery
        cars={filteredCars}
        onLearnMoreClick={openModal}
        onFavouriteClick={onFavouriteClick}
      />
    </section>
  );
};

export default MainPage;
