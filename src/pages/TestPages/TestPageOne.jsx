import { Routes, Route } from "react-router-dom";

import {
  CarFilterTest,
  DateAndTimeTest,
  FibonacciTest,
  FontsAndSVGimagesTest,
  PrimeNumbersTest,
  StarsEffectTest,
  SquaresTest,
  TestPageLayout,
} from "./testComponents";

const TestPageOne = () => {
  const varNameToString = (objectName) => {
    return Object.keys(objectName)[0];
  };

  return (
    <Routes>
      <Route path="/" element={<TestPageLayout />}>
        <Route
          path="tests"
          element={
            <div>
              <CarFilterTest />
              <DateAndTimeTest />
              <FibonacciTest />
              <FontsAndSVGimagesTest />
              <PrimeNumbersTest />
              <SquaresTest />
            </div>
          }
        />
        <Route path="stars" element={<StarsEffectTest />} />
        <Route path="moir" element={<div>Moir</div>} />
      </Route>
    </Routes>
  );
};

export default TestPageOne;
