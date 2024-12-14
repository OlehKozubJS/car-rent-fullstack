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
        <nav>
          <NavLink to="/">Car Rent</NavLink>
          <NavLink to=""></NavLink>
          <NavLink to=""></NavLink>
          <NavLink to=""></NavLink>
        </nav>
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<TestPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export { App };
