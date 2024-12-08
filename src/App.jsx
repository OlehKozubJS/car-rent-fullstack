import { useEffect, useState } from "react";

import { MainPage, TestPage, MygerPage } from "./pages";

const App = () => {
  const [pages] = useState({
    "Main page": <MainPage />,
    "Test page": <TestPage />,
    "Myger page": <MygerPage />,
  });
  const [CurrentPage, setCurrentPage] = useState("MainPage");

  const handleCurrentPageName = (event) => {
    setCurrentPageName(pages[event.target.value]);
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            {Object.keys(pages).map(({ pageName }) => {
              return (
                <li key={pageName}>
                  <label htmlFor={pageName}>
                    <input
                      id={pageName}
                      name="pageSwitcher"
                      type="radio"
                      onChange={handleCurrentPageName}
                      value={pageName}
                      checked={CurrentPage === pageName}
                    />
                    <span>{pageName}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main>{CurrentPage}</main>
    </>
  );
};

export { App };
