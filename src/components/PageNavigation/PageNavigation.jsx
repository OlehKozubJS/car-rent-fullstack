import { /*useEffect,*/ useState } from "react";

import { carsLocalData } from "./database";

import { MainPage, TestPage, MygerPage } from "./pages";

import "./style";

const PageNavigation = ({ pages, onClick }) => {
  const handleCurrentPageName = (event) => {
    setCurrentPageName(event.target.value);
  };

  return (
    <div>
      <header>
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
      </header>
      <main>{pages[currentPageName]}</main>
    </div>
  );
};

export { PageNavigation };
