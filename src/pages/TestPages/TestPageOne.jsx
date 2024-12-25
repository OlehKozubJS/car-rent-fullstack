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
          <NavLink />
        </li>
        <li>
          <NavLink />
        </li>
        <li>
          <NavLink />
        </li>
      </ul>
      <Routes>
        <Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default TestPageOne;
