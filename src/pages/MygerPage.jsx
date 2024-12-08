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
  background-image: radial-gradient(at center, white, white, black);
`;

const MygerPage = () => {
  const [sizeValue, setSizeValue] = useState(0);
  const [middleSizeValue, setMiddleSizeValue] = useState(0);
  const [topValue, setTopValue] = useState(0);
  const [leftValue, setLeftValue] = useState(0);

  const getRandomNumber = (maximalNumber) => {
    return Math.floor(Math.random() * maximalNumber);
  };

  const setWhiteSpotCoordinates = () => {
    setTopValue(getRandomNumber(500));
    setLeftValue(getRandomNumber(1000));
    setSizeValue(getRandomNumber(100));
  };

  const setWhiteSpotSize = () => {
    if (middleSizeValue >= sizeValue) {
      setMiddleSizeValue(0);
    } else {
      setMiddleSizeValue(middleSizeValue + 1);
    }
  };

  useEffect(() => {
    const setWhiteSpotCoordinatesAnimation = setTimeout(
      setWhiteSpotCoordinates,
      1000
    );

    return () => {
      clearTimeout(setWhiteSpotCoordinatesAnimation);
    };
  }, [sizeValue]);

  useEffect(() => {
    const setWhiteSpotSizeAnimation = setTimeout(setWhiteSpotSize, 50);

    return () => {
      clearTimeout(setWhiteSpotSizeAnimation);
    };
  }, [sizeValue, middleSizeValue]);

  //onSubmit({ make, minRentalPrice, maxRentalPrice, minMileage, maxMileage });

  return (
    <div style={{ fontFamily: "MysteryQuest" }}>
      <CheapTrick>
        <JustAnotherDiv
          top={topValue}
          left={leftValue}
          size={middleSizeValue}
        ></JustAnotherDiv>
      </CheapTrick>

      <p>Progress always wins!</p>
    </div>
  );
};

export { MygerPage };

//     unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f, U+A720-A7FF;
