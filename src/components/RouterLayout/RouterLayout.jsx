import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { RouterNavigation } from "./RouterNavigation";

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
          <Outlet></Outlet>
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
};

export { RouterLayout };
