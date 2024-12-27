import { Routes, Route, Outlet } from "react-router-dom";

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
        <Route path="tests" element={<Outlet />}>
          <Route path="" element={<DateAndTimeTest />} />
          <Route path="" elemnt={<FibonacciTest />} />
          <Route path="" element={<PrimeNumbersTest />} />
          <Route path="" element={<SquaresTest />} />
          <Route path="" element={<FontsAndSVGimagesTest />} />
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
