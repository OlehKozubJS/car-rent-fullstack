import { useState, useEffect } from 'react';
import { SVGimage } from '../../images';
import cars from '../../advertsCars.json';
import css from './CarModal.module.css';
import { ManropeR, ManropeM, ManropeB, MontserratB } from '../../fonts';

const CarModal = ({ carId, onClose }) => {
  const [car] = useState(cars.find(car => car.id === carId));

  useEffect(() => {
    const handleEsc = event => {
      if (event.type === 'keydown' && event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className={css.CarModalBackdrop}>
      <div className={css.CarModalContainer}>
        <div className={css.CarModalCloseButtonContainer}>
          <button className={css.CarModalCloseButton} onClick={onClose}>
            <SVGimage name="close" />
          </button>
        </div>
        <img src={car.img} alt="" />
        <h3 className={`${css.CarModalHeader} ${ManropeM}`}>
          <span>{car.make}</span>{' '}
          <span className={css.CarModalItemValue}>{car.model}</span>,{' '}
          <span>{car.year}</span>
        </h3>
        <ul className={css.CarModalItems}>
          <li className={`${css.CarModalItem} ${ManropeR}`}>
            {car.address.split(', ')[1]}
          </li>
          <li className={`${css.CarModalItem} ${ManropeR}`}>
            {car.address.split(', ')[2]}
          </li>
          <li className={`${css.CarModalItem} ${ManropeR}`}>
            Id: <span className={css.CarModalItemValue}>{car.id}</span>
          </li>
          <li className={`${css.CarModalItem} ${ManropeR}`}>
            Year: <span className={css.CarModalItemValue}>{car.year}</span>
          </li>
          <li className={`${css.CarModalItem} ${ManropeR}`}>
            Type: <span className={css.CarModalItemValue}>{car.type}</span>
          </li>
          <li className={`${css.CarModalItem} ${ManropeR}`}>
            Fuel Consumption:{' '}
            <span className={css.CarModalItemValue}>{car.fuelConsumption}</span>
          </li>
          <li className={`${css.CarModalItem} ${ManropeR}`}>
            Engine Size:{' '}
            <span className={css.CarModalItemValue}>{car.engineSize}</span>
          </li>
        </ul>
        <p className={`${css.CarModalDescription} ${ManropeR}`}>
          {car.description}
        </p>
        <h4 className={`${css.CarModalSubHeader} ${ManropeM}`}>
          Accessories and functionalities:
        </h4>
        <ul className={css.CarModalItems}>
          {car.accessories.map(item => {
            return (
              <li className={`${css.CarModalItem} ${ManropeR}`}>{item}</li>
            );
          })}
          {car.functionalities.map(item => {
            return (
              <li className={`${css.CarModalItem} ${ManropeR}`}>{item}</li>
            );
          })}
        </ul>
        <h4 className={`${css.CarModalSubHeader} ${ManropeM}`}>
          Rental Conditions:{' '}
        </h4>
        <ul className={css.CarModalItems}>
          <li className={css.CarModalRentalItem}>
            Minimum age:{' '}
            <span className={`${css.CarModalItemValue} ${MontserratB}`}>
              {car.rentalConditions.split('\n')[0].split(' ')[2]}
            </span>
          </li>
          <li className={css.CarModalRentalItem}>
            {car.rentalConditions.split('\n')[1]}
          </li>
          <li className={css.CarModalRentalItem}>
            {car.rentalConditions.split('\n')[2]}
          </li>
          <li className={css.CarModalRentalItem}>
            Mileage:{' '}
            <span className={`${css.CarModalItemValue} ${MontserratB}`}>
              {car.mileage}
            </span>
          </li>
          <li className={css.CarModalRentalItem}>
            Price:{' '}
            <span className={`${css.CarModalItemValue} ${MontserratB}`}>
              {car.rentalPrice}
            </span>
          </li>
        </ul>
        <button className={`${css.CarModalSubmitButton} ${ManropeB}`}>
          Rental car
        </button>
      </div>
    </div>
  );
};

export { CarModal };
