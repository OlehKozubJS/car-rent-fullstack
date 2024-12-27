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
            <div>
              <nav>
                <ul>
                  <li>
                    <NavLink to="dateAndTime">Date and time</NavLink>
                  </li>
                  <li>
                    <NavLink to="fibonacci">Fibonacci</NavLink>
                  </li>
                  <li>
                    <NavLink to="primeNumbers">Prime numbers</NavLink>
                  </li>
                  <li>
                    <NavLink to="squares">Squares</NavLink>
                  </li>
                  <li>
                    <NavLink to="fontsAndSVGimages">
                      Fonts and SVG images
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="carFilter">Car filter</NavLink>
                  </li>
                </ul>
              </nav>
              <Outlet />
            </div>
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
