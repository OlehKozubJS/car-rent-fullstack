import { useEffect, useState, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { carsLocalData } from "./database";

import { lazyLoader } from "./hooks";

import { RouterLayout } from "./components";

import "./style";

const [MainPage, FavouriteCarsPage] = lazyLoader([
  "MainPage",
  "FavouriteCarsPage",
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
            ]}
          />
        }
      >
        <Route
          index
          element={
            <MainPage cars={carsLocalData} onFavouriteClick={addFavouriteCar} />
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
      </Route>
    </Routes>
  );
};

export { App };
