import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CarFilter, CarGallery, CarModal } from "./imports";

const FavouriteCarsPage = ({ cars, onFavouriteClick }) => {
  const [isModal, setIsModal] = useState(false);
  const [car, setCar] = useState(null);

  const openModal = (newCar) => {
    setCar(newCar);
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <section>
      {isModal && <CarModal car={car} onClose={closeModal} />}
      <CarGallery
        cars={cars}
        onLearnMoreClick={openModal}
        onFavouriteClick={onFavouriteClick}
      />
    </section>
  );
};

export default FavouriteCarsPage;
