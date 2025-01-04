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
  /*  

  */
  const handleFilteredCars = ({
    carBrand,
    minMileage,
    maxMileage,
    minPrice,
    maxPrice,
  }) => {
    setFilteredCars(
      cars.filter(
        ({ make, mileage, rentalPrice }) =>
          ((carBrand && make === carBrand) || true) &&
          ((minMileage && minMileage <= mileage) || true) &&
          ((maxMileage && maxMileage >= mileage) || true) &&
          ((minPrice && minPrice <= rentalPrice) || true) &&
          ((maxPrice && maxPrice >= rentalPrice) || true)
      )
    );
  };

  return (
    <section>
      {isModal && <CarModal car={car} onClose={closeModal} />}
      <CarFilter
        cars={cars}
        carBrands={carBrands}
        onSubmit={handleFilteredCars}
      />
      <CarGallery
        cars={cars}
        onLearnMoreClick={openModal}
        onFavouriteClick={onFavouriteClick}
      />
    </section>
  );
};

export default MainPage;
