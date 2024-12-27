import { Routes, Route, Outlet, NavLink } from "react-router-dom";

import {
  CarFilterTest,
  DateAndTimeTest,
  FibonacciTest,
  FontsAndSVGimagesTest,
  PrimeNumbersTest,
  StarsEffectTest,
  SquaresTest,
  TestPageLayout,
  MoirTest,
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
            <>
              <NavLink to="dateAndTime">Date and time</NavLink>
              <NavLink to="fibonacci">Fibonacci</NavLink>
              <NavLink to="primeNumbers">Prime numbers</NavLink>
              <NavLink to="squares">Squares</NavLink>
              <NavLink to="fontsAndSVGimages">Fonts and SVG images</NavLink>
              <NavLink to="carFilter">Car filter</NavLink>
              <Outlet />
            </>
          }
        >
          <Route path="dateAndTime" element={<DateAndTimeTest />} />
          <Route path="fibonacci" element={<FibonacciTest />} />
          <Route path="primeNumbers" element={<PrimeNumbersTest />} />
          <Route path="squares" element={<SquaresTest />} />
          <Route path="fontsAndSVGimages" element={<FontsAndSVGimagesTest />} />
          <Route path="carFilter" element={<CarFilterTest />} />
        </Route>
        <Route path="stars" element={<StarsEffectTest />} />
        <Route path="moir" element={<MoirTest />} />
      </Route>
    </Routes>
  );
};
/*

<CarFilterTest />
          <DateAndTimeTest />
          <FibonacciTest />
          <FontsAndSVGimagesTest />
          <PrimeNumbersTest />
          <SquaresTest />

*/
export default TestPageOne;
