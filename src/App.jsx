import { eseEffect, useState } from "react";

import { MainPage, TestPage, MygerPage } from "./pages";

const App = () => {
  const [pageName, setPageName] = useState([
    "MainPage",
    "TestPage",
    "MygerPage",
  ]);

  const handlePageName = (event) => {
    setPageName(event.target.value);
  };

  return (
    <section>
      <label htmlFor="MainPageRadio">
        <input
          id="MainPageRadio"
          name="pageSwitcher"
          type="radio"
          onChange={handlePageName}
          value="MainPage"
        />
        <span>Main page</span>
      </label>
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

      {pageName === "MainPage" && <MainPage />}
      {pageName === "TestPage" && <TestPage />}
      {pageName === "MygerPage" && <MygerPage />}
    </section>
  );
};

export { App };
