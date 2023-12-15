import { useState, useEffect } from 'react';
import { SVGimage } from '../../images';
import cars from '../../advertsCars.json';
import css from './CarModal.module.css';

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
        <div>
          <div>{car.address.split(', ')[1]}</div>
          <div>{car.address.split(', ')[2]}</div>
          <div>
            Id:
            <span>{car.id}</span>
          </div>
          <div>
            Year:
            <span>{car.year}</span>
          </div>
          <div>
            Type:
            <span>{car.type}</span>
          </div>
          <div>
            Fuel Consumption:
            <span>{car.fuelConsumption}</span>
          </div>
          <div>
            Engine Size:
            <span>{car.engineSize}</span>
          </div>
        </div>
        <h4>Accessories and functionalities:</h4>
        <ul>
          {car.accessories.map(item => {
            return <li>{item}</li>;
          })}
          {car.functionalities.map(item => {
            return <li>{item}</li>;
          })}
        </ul>
        <h4>Rental Conditions: </h4>
        <div className={css.CarModalItems}>
          <div className={css.CarModalRentalItem}>
            Minimum age:{' '}
            <span>{car.rentalConditions.split('\n')[0].split(' ')[1]}</span>
          </div>
          <div className={css.CarModalRentalItem}>
            {car.rentalConditions.split('\n')[1]}
          </div>
          <div className={css.CarModalRentalItem}>
            {car.rentalConditions.split('\n')[2]}
          </div>
          <div className={css.CarModalRentalItem}>
            Mileage: <span>{car.mileage}</span>
          </div>
          <div className={css.CarModalRentalItem}>
            Price: <span>{car.rentalPrice}</span>
          </div>
        </div>
        <button className={css.CarModalSubmitButton}>Rental car</button>
      </div>
    </div>
  );
};

export { CarModal };
