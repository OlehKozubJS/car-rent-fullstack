import { useEffect, useState } from "react";

import { MainPage, TestPage, MygerPage } from "./pages";

const App = () => {
  const [pages] = useState([
    { pageName: "Main page", element: MainPage },
    { pageName: "Test page", element: TestPage },
    { pageName: "Myger page", element: MygerPage },
  ]);
  const [pageName, setPageName] = useState("MainPage");

  const handlePageName = (event) => {
    setPageName(event.target.value);
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            {pages.map({pageName, element}) => {
              return (
            <li>
              <label htmlFor="MainPageRadio">
                <input
                  id="MainPageRadio"
                  name="pageSwitcher"
                  type="radio"
                  onChange={handlePageName}
                  value="MainPage"
                  checked={pageName === "MainPage"}
                />
                <span>Main page</span>
              </label>
            </li>
            );
            }
            }
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
