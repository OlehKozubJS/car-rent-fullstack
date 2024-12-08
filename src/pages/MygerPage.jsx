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
  const [isMygerPage, setIsMygerPage] = useState(false);

  const openMygerPage = () => {
    setIsMygerPage(true);
  };

  const closeMygerPage = () => {
    setIsMygerPage(false);
  };

  useEffect(() => {}, []);

  //onSubmit({ make, minRentalPrice, maxRentalPrice, minMileage, maxMileage });

  return (
    <CheapTrick>
      <JustAnotherDiv top={30} left={40} size={100}></JustAnotherDiv>
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
