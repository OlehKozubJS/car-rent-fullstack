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
          <NavLink to="tests">Various tests</NavLink>
        </li>
        <li>
          <NavLink to="stars">Stars effect tests</NavLink>
        </li>
        <li>
          <NavLink to="moir">Moir test</NavLink>
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
          <Route path="stars" element={<StarsEffectTest />} />
          <Route path="moir" element={<div>Moir</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default TestPageOne;
