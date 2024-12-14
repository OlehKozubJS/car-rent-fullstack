import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

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

import "./style";

const App = () => {
  return (
    <div>
      <header></header>
      <main></main>
    </div>
  );
};

export { App };
