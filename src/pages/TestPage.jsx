import { useState, useEffect } from "react";

import {
  cars,
  handleEventListener,
  handleInterval,
  handleTimeOut,
  CarFilter,
  CarGallery,
  CarModal,
} from "./imports";

import { SVGimage } from "../images";

const TestPage = () => {
  const [time, setTime] = useState(0);

  const [fibonacciArray, setFibonacciArray] = useState([0, 1]);

  const [primeNumbersArray, setPrimeNumbersArray] = useState([2]);

  const [date, setDate] = useState(new Date());

  const dateAnimationFunction = () => {
    setDate(new Date());
  };

  const timeAnimationFunctionOne = () => {
    setTime(time + 1);
  };

  const fibonacciTimeFunction = () => {
    if (fibonacciArray.length < 16) {
      setFibonacciArray([
        ...fibonacciArray,
        fibonacciArray[fibonacciArray.length - 1] +
          fibonacciArray[fibonacciArray.length - 2],
      ]);
    }
  };

  const primeNumbersFunction = () => {
    let lastPrimeNumber = primeNumbersArray[primeNumbersArray.length - 1];

    if (lastPrimeNumber >= 100) {
      return;
    }

    let newPrimeNumber = lastPrimeNumber;

    while (true) {
      newPrimeNumber += 1;

      const isNoDivisors = primeNumbersArray.every(
        (primeNumber) =>
          newPrimeNumber / primeNumber !==
          Math.floor(newPrimeNumber / primeNumber)
      );

      if (isNoDivisors) {
        break;
      }
    }

    setPrimeNumbersArray([...primeNumbersArray, newPrimeNumber]);
  };

  const varNameToString = (objectName) => {
    return Object.keys(objectName)[0];
  };

  useEffect(handleInterval(dateAnimationFunction, 1000), []);

  useEffect(handleInterval(timeAnimationFunctionOne, 500), [time]);

  useEffect(handleTimeOut(fibonacciTimeFunction, 1000), [fibonacciArray]);

  useEffect(handleInterval(primeNumbersFunction, 1000), [primeNumbersArray]);

  const [squares, setSquares] = useState([]);

  const getSquare = () => {
    if (squares.length < 10) {
      setSquares([...squares, Math.pow(squares.length, 2)]);
    }
  };

  useEffect(getSquare, [squares]);

  let make = "";
  let minRentalPrice = 0;
  let maxRentalPrice = 0;
  let minMileage = 0;
  let maxMileage = 0;

  const handler = (event) => {
    return event.target.value;
  };

  const handleMake = (event) => {
    make = handler(event);
  };

  const handleMinimalRentalPrice = (event) => {
    minRentalPrice = handler(event);
  };

  const handleMaximalRentalPrice = (event) => {
    maxRentalPrice = handler(event);
  };

  const handleMinimalMileage = (event) => {
    minMileage = handler(event);
  };

  const handleMaximalMileage = (event) => {
    maxMileage = handler(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //onSubmit({ make, minRentalPrice, maxRentalPrice, minMileage, maxMileage });
  };

  return (
    <div>
      {String(date)}
      <p>{time}</p>
      <p>{fibonacciArray.join(", ")}</p>
      <p>{primeNumbersArray.join(", ")}</p>
      <p>{squares.join(", ")}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Car brand (make)</h3>
          <label htmlFor="carMakeInput">
            <input
              id="carMakeInput"
              type="text"
              placeholder="Enter car make name or its part"
              onChange={handleMake}
              style={{ width: "200px" }}
            />
          </label>
        </div>
        <div>
          <h3>Car rental price</h3>
          <label htmlFor="minCarRentalPriceInput">
            <input
              id="minCarRentalPriceInput"
              type="number"
              placeholder="From"
              onChange={handleMinimalRentalPrice}
            />
          </label>
          <label htmlFor="maxCarRentalPriceInput">
            <input
              id="maxCarRentalPriceInput"
              type="number"
              placeholder="To"
              onChange={handleMaximalRentalPrice}
            />
          </label>
        </div>
        <div>
          <h3>Car mileage</h3>
          <label htmlFor="minCarMileageInput">
            <input
              id="minCarMileageInput"
              type="number"
              placeholder="From"
              onChange={handleMinimalMileage}
            />
          </label>
          <label htmlFor="maxCarMileageInput">
            <input
              id="maxCarMileageInput"
              type="number"
              placeholder="To"
              onChange={handleMaximalMileage}
            />
          </label>
        </div>
        <button type="submit">Find car</button>
      </form>
      <span style={{ fontFamily: "manrope-regular" }}>Regular</span>
      <span style={{ fontFamily: "manrope-medium" }}>Medium</span>
      <span style={{ fontFamily: "manrope-semibold" }}>Semibold</span>
      <span style={{ fontFamily: "montserrat-regular" }}>Regular</span>
      <span style={{ fontFamily: "montserrat-semibold" }}>Semibold</span>
      <div style={{ backgroundColor: "black" }}>
        <SVGimage name="fav" />
      </div>
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img
        src="https://ftp.goit.study/img/cars-test-task/land_rover_range_rover_sport.jpeg"
        alt=""
      />
      <img
        src="https://ftp.goit.study/img/cars-test-task/kia_rio_sedan_hatchback.jpeg"
        alt=""
      />
    </div>
  );
};

export { TestPage };
