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
    <Routes>
      <Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Route>
    </Routes>
  );
};

export default TestPageOne;
