import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { carsLocalData } from "./database";

const [MainPage, FavouriteCarsPage, TestPageOne, TestPageTwo] = [
  "MainPage",
  "FavouriteCarsPage",
  "TestPageOne",
  "TestPageTwo",
].map((pageName) => {
  return lazy(() => import(`./pages/${pageName}`));
});

import "./style";

const RouterLayout = () => {
  const [favouriteCars, setFavouriteCars] = useState([]);

  const addFavouriteCar = (car) => {
    setFavouriteCars([...favouriteCars, car]);
  };

  const removeFavouriteCar = (car) => {
    setFavouriteCars(
      favouriteCars.filter((favouriteCar) => car.id !== favouriteCar.id)
    );
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
      <footer></footer>
    </div>
  );
};

export { RouterLayout };
