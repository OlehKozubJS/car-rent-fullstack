import { useState, useEffect } from "react";

import { CarFilter, CarGallery, CarModal } from "./imports";
// make rentalPrice mileage
const MainPage = ({ cars, carBrands, onFavouriteClick }) => {
  const [isModal, setIsModal] = useState(false);
  const [filteredCars, setFilteredCars] = useState();
  const [car, setCar] = useState(null);

  const openModal = (newCar) => {
    setCar(newCar);
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const handleSubmit = () => {};

  return (
    <section>
      {isModal && <CarModal car={car} onClose={closeModal} />}
      <CarFilter
        cars={cars}
        carBrands={carBrands}
        onSubmit={(data) => {
          console.log(data);
        }}
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
