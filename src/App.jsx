import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { carsLocalData, makesLocalData } from "./database";

import { lazyLoader } from "./hooks";

import { RouterLayout } from "./components";

import "./style";

const [MainPage, FavouriteCarsPage, TestPage] = lazyLoader([
  "MainPage",
  "FavouriteCarsPage",
  "test",
]);

const App = () => {
  const [favouriteCars, setFavouriteCars] = useState([]);

  const location = useLocation();

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
            currentLocation={location}
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
        >
          <Route path="toProgressWins" element={<p>Progress Wins!</p>} />
        </Route>
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
