import { useEffect, useState, lazy, Suspense } from "react";

import { carsLocalData } from "./database";

//import { MainPage, FavouritesPage, TestPage, MygerPage } from "./pages";

const MainPage = lazy(() => {
  import("./pages/MainPage");
});

const FavouritesPage = lazy(() => {
  import("./pages/FavouritesPage");
});

const TestPage = lazy(() => {
  import("./pages/TestPage");
});

const MygerPage = lazy(() => {
  import("./pages/MygerPage");
});

import { PageNavigation } from "./components";

import "./style";

const App = () => {
  const handleFavouriteCars = (carData) => {
    console.log(carData);
    setFavouriteCars([...favouriteCars, carData]);
  };

  useEffect(() => {
    console.log(favouriteCars);
  }, [favouriteCars]);

  return (
    <div style={{ fontFamily: "Manrope-Regular" }}>
      <header></header>
      <main></main>
    </div>
  );
};

export { App };
