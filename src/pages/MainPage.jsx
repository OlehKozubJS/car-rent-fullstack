import { useState, useEffect } from "react";

import { CarFilter, CarGallery, CarModal } from "./imports";
import { NavLink, Outlet } from "react-router-dom";

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

  const deleteDollarSign = (rentalPrice) => {
    let rentalPriceArray = rentalPrice.split("");
    rentalPriceArray.shift();
    return rentalPriceArray.join("");
  };

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
          (!carBrand || make === carBrand) &&
          (!minMileage || Number(minMileage) <= mileage) &&
          (!maxMileage || Number(maxMileage) >= mileage) &&
          (!minPrice ||
            Number(minPrice) <= Number(deleteDollarSign(rentalPrice))) &&
          (!maxPrice ||
            Number(maxPrice) >= Number(deleteDollarSign(rentalPrice)))
      )
    );
  };

  return (
    <section>
      <NavLink to="toProgressWins">hello</NavLink>
      <NavLink to="/">goodbye</NavLink>
      <Outlet />
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
