import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { carsLocalData } from "./database";

const MainPage = lazy(() => import("./pages/MainPage"));

const FavouritesPage = lazy(() => import("./pages/FavouritesPage"));

const TestPage = lazy(() => import("./pages/TestPage"));

const MygerPage = lazy(() => import("./pages/MygerPage"));

import "./style";

const App = () => {
  return (
    <div>
      <header>
        <nav></nav>
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
/*

          <NavLink to="" />
          <NavLink to="" />
          <NavLink to="" />
          <NavLink to="" />
          
*/
export { App };
