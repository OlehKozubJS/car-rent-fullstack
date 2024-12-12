import { /*useEffect,*/ useState } from "react";

import { carsLocalData } from "./database";

import { MainPage, TestPage, MygerPage } from "./pages";

import "./style";

const PageNavigation = ({ pagesObject, onClick }) => {
  const handleCurrentPageName = (event) => {
    onClick(pagesObject[event.target.value]);
  };

  return (
    <nav>
      <ul>
        {Object.keys(pages).map((pageName) => {
          return (
            <li key={pageName}>
              <label htmlFor={pageName}>
                <input
                  id={pageName}
                  name="pageSwitcher"
                  type="radio"
                  onChange={handleCurrentPageName}
                  value={pageName}
                  checked={currentPageName === pageName}
                />
                <span>{pageName}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { PageNavigation };
