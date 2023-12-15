import { useState, useEffect } from 'react';
import { SVGimage } from '../../images';
import cars from '../../advertsCars.json';
import css from './CarModal.module.css';
import { ManropeR, ManropeM, ManropeB } from '../../fonts';

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
        <h3 className={css.CarModalHeader}>
          <span>{car.make}</span>{' '}
          <span className={css.CarModalItemValue}>{car.model}</span>,{' '}
          <span>{car.year}</span>
        </h3>
        <ul className={css.CarModalItems}>
          <li className={css.CarModalItem}>{car.address.split(', ')[1]}</li>
          <li className={css.CarModalItem}>{car.address.split(', ')[2]}</li>
          <li className={css.CarModalItem}>
            Id: <span className={css.CarModalItemValue}>{car.id}</span>
          </li>
          <li className={css.CarModalItem}>
            Year: <span className={css.CarModalItemValue}>{car.year}</span>
          </li>
          <li className={css.CarModalItem}>
            Type: <span className={css.CarModalItemValue}>{car.type}</span>
          </li>
          <li className={css.CarModalItem}>
            Fuel Consumption:{' '}
            <span className={css.CarModalItemValue}>{car.fuelConsumption}</span>
          </li>
          <li className={css.CarModalItem}>
            Engine Size:{' '}
            <span className={css.CarModalItemValue}>{car.engineSize}</span>
          </li>
        </ul>
        <h4 className={css.CarModalSubHeader}>
          Accessories and functionalities:
        </h4>
        <ul className={css.CarModalItems}>
          {car.accessories.map(item => {
            return <li className={css.CarModalItem}>{item}</li>;
          })}
          {car.functionalities.map(item => {
            return <li className={css.CarModalItem}>{item}</li>;
          })}
        </ul>
        <h4 className={css.CarModalSubHeader}>Rental Conditions: </h4>
        <ul className={css.CarModalItems}>
          <li className={css.CarModalRentalItem}>
            Minimum age:{' '}
            <span className={css.CarModalItemValue}>
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
            <span className={css.CarModalItemValue}>{car.mileage}</span>
          </li>
          <li className={css.CarModalRentalItem}>
            Price:{' '}
            <span className={css.CarModalItemValue}>{car.rentalPrice}</span>
          </li>
        </ul>
        <button className={css.CarModalSubmitButton}>Rental car</button>
      </div>
    </div>
  );
};

export { CarModal };
