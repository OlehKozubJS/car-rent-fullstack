import { Routes, Route, Outlet, NavLink } from "react-router-dom";

import {
  CarFilterTest,
  DateAndTimeTest,
  FibonacciTest,
  FontsAndSVGimagesTest,
  PrimeNumbersTest,
  StarsEffectTest,
  SquaresTest,
} from "./testComponents";

const TestPageOne = () => {
  const varNameToString = (objectName) => {
    return Object.keys(objectName)[0];
  };

  return (
    <div>
      <ul>
        <li>
          <NavLink></NavLink>
        </li>
        <li>
          <NavLink></NavLink>
        </li>
        <li>
          <NavLink></NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Outlet />}>
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
          <Route path="moir" element={<div>Moir</div>} />
          <Route path="stars" element={<StarsEffectTest />} />
        </Route>
      </Routes>
    </div>
  );
};

export default TestPageOne;
