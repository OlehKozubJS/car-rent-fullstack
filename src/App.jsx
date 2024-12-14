import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { carsLocalData } from "./database";

const MainPage = lazy(() => import("./pages/MainPage"));

const FavouritesPage = lazy(() => import("./pages/FavouritesPage"));

const TestPageOne = lazy(() => import("./pages/TestPageOne"));

const TestPageTwo = lazy(() => import("./pages/TestPageTwo"));

import "./style";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Car Rent</NavLink>
          <NavLink to="/FavouriteCars">Favourite Cars</NavLink>
          <NavLink to=""></NavLink>
          <NavLink to=""></NavLink>
        </nav>
      </header>
      <main>
        <Suspense downfall={<p>loading...</p>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export { App };
