import { useEffect, useState } from "react";

import { MainPage, TestPage, MygerPage } from "./pages";

const App = () => {
  const [pages] = useState([
    { pageName: "Main page", element: MainPage },
    { pageName: "Test page", element: TestPage },
    { pageName: "Myger page", element: MygerPage },
  ]);
  const [currentPageName, setCurrentPageName] = useState("MainPage");

  const handleCurrentPageName = (event) => {
    setCurrentPageName(event.target.value);
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            {pages.map(({ pageName }) => {
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
      <main>
        {pageName === "MainPage" && <MainPage />}
        {pageName === "TestPage" && <TestPage />}
        {pageName === "MygerPage" && <MygerPage />}
      </main>
    </>
  );
};

export { App };
