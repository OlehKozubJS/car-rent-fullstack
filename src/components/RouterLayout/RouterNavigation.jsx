import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { carsLocalData } from "./database";

const RouterNavigation = () => {
  return (
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
  );
};

export { RouterNavigation };
