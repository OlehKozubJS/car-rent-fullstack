import { useState, useEffect } from "react";

import styled from "@emotion/styled";

import { carsLocalData } from "./imports";

const CheapTrick = styled.section`
  height: 500px;
  background-color: black;
  position: relative;
`;

const JustAnotherDiv = styled.div`
  position: absolute;
  top: ${({ top = 0 }) => {
    return top;
  }}px;
  left: ${({ left = 0 }) => {
    return left;
  }}px;
  width: ${({ size = 0 }) => {
    return size;
  }}px;
  height: ${({ size = 0 }) => {
    return size;
  }}px;

  border-radius: 50%;
  background-color: white;
`;

const MygerPage = () => {
  const [sizeValue, setSizeValue] = useState(0);
  const [topValue, setTopValue] = useState(0);
  const [leftValue, setLeftValue] = useState(0);

  const getRandomNumber = (maximalNumber) => {
    return Math.floor(Math.random() * maximalNumber);
  };

  const setWhiteSpotParameters = () => {
    setSizeValue(getRandomNumber(100));
    setTopValue(getRandomNumber(250));
    setLeftValue(getRandomNumber(1000));
  };

  const closeMygerPage = () => {
    setIsMygerPage(false);
  };

  useEffect(() => {
    const setWhiteSpotParametersAnimation = setTimeout(
      setWhiteSpotParameters,
      20
    );

    return () => {
      clearTimeout(setWhiteSpotParametersAnimation, 20);
    };
  }, [sizeValue, topValue, leftValue]);

  //onSubmit({ make, minRentalPrice, maxRentalPrice, minMileage, maxMileage });

  return (
    <CheapTrick>
      <JustAnotherDiv
        top={topValue}
        left={leftValue}
        size={sizeValue}
      ></JustAnotherDiv>
      <div>
        <div></div>
      </div>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </CheapTrick>
  );
};

export { MygerPage };
