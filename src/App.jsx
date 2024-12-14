import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { carsLocalData } from "./database";

const MainPage = lazy(() => import("./pages/MainPage"));
const FavouriteCarsPage = lazy(() => import("./pages/FavouriteCarsPage"));
const TestPageOne = lazy(() => import("./pages/TestPageOne"));
const TestPageTwo = lazy(() => import("./pages/TestPageTwo"));

import "./style";

const App = () => {
  const [favouriteCars, setFavouriteCars] = useState([]);

  const addFavouriteCar = (car) => {
    setFavouriteCars([...favouriteCars, car]);
  };

  const removeFavouriteCar = () => {
    setFavouriteCars(favouriteCars.filter(() => {}));
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Car Rent</NavLink>
            </li>
            <li>
              <NavLink to="/FavouriteCars">Favourite Cars</NavLink>
            </li>
            <li>
              <NavLink to="/TestOne">Test One</NavLink>
            </li>
            <li>
              <NavLink to="TestTwo">Test Two</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense downfall={<p>loading...</p>}>
          <Routes>
            <Route
              path="/"
              element={
                <MainPage
                  cars={carsLocalData}
                  onFavouriteClick={addFavouriteCar}
                />
              }
            />
            <Route
              path="/FavouriteCars"
              element={
                <FavouriteCarsPage
                  cars={favouriteCars}
                  onFavouriteClick={removeFavouriteCar}
                />
              }
            />
            <Route path="/TestOne" element={<TestPageOne />} />
            <Route path="/TestTwo" element={<TestPageTwo />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export { App };
