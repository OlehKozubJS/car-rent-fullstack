import { useEffect, useState, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { carsLocalData, makesLocalData } from "./database";

import { lazyLoader } from "./hooks";

import { RouterLayout } from "./components";

import "./style";

const [MainPage, FavouriteCarsPage, TestPage] = lazyLoader([
  "MainPage",
  "FavouriteCarsPage",
  "TestPage",
]);

const App = () => {
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
    <Routes>
      <Route
        path="/"
        element={
          <RouterLayout
            pages={[
              { pagePath: "/", pageTitle: "Car Rent" },
              { pagePath: "/FavouriteCars", pageTitle: "Favourite Cars" },
              { pagePath: "/Test", pageTitle: "Test" },
            ]}
          />
        }
      >
        <Route
          index
          element={
            <MainPage
              cars={carsLocalData}
              carBrands={makesLocalData}
              onFavouriteClick={addFavouriteCar}
            />
          }
        />
        <Route
          path="FavouriteCars"
          element={
            <FavouriteCarsPage
              cars={favouriteCars}
              onFavouriteClick={removeFavouriteCar}
            />
          }
        />
        <Route path="Test" element={<TestPage />} />
      </Route>
    </Routes>
  );
};

export { App };
