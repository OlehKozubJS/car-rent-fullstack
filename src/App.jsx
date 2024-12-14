import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { carsLocalData } from "./database";

const MainPage = lazy(() => import("./pages/MainPage"));

const FavouriteCarsPage = lazy(() => import("./pages/FavouriteCarsPage"));

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
          <NavLink to="/TestOne">Test One</NavLink>
          <NavLink to="TestTwo">Test Two</NavLink>
        </nav>
      </header>
      <main>
        <Suspense downfall={<p>loading...</p>}>
          <Routes>
            <Route path="/" element={<MainPage cars={carsLocalData} />} />
            <Route path="/FavouriteCars" element={<FavouriteCarsPage />} />
            <Route path="/TestOne" element={<TestPageOne />} />
            <Route path="/TestTwo" element={<TestPageTwo />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export { App };
