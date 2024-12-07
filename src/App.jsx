import { eseEffect, useState } from "react";

import { MainPage, TestPage, MygerPage } from "./pages";

const App = () => {
  const [pageName, setPageName] = useState("MainPage");

  const handlePageName = (event) => {
    setPageName(event.target.value);
  };

  return (
    <section>
      <ul>
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
        <li>
          <label htmlFor="TestPageRadio">
            <input
              id="TestPageRadio"
              name="pageSwitcher"
              type="radio"
              onChange={handlePageName}
              value="TestPage"
            />
            <span>Test page</span>
          </label>
        </li>
        <li>
          <label htmlFor="MygerPageRadio">
            <input
              id="MygerPageRadio"
              name="pageSwitcher"
              type="radio"
              onChange={handlePageName}
              value="MygerPage"
            />
            <span>Myger page</span>
          </label>
        </li>
      </ul>

      {pageName === "MainPage" && <MainPage />}
      {pageName === "TestPage" && <TestPage />}
      {pageName === "MygerPage" && <MygerPage />}
    </section>
  );
};

export { App };
