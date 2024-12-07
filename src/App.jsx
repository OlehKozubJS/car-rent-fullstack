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
        <p>Main page</p>
      </label>
      <label htmlFor="TestPageRadio">
        <input
          id="TestPageRadio"
          name="pageSwitcher"
          type="radio"
          onChange={handlePageName}
          value="TestPage"
        />
        <p>Test page</p>
      </label>
      <label htmlFor="MygerPageRadio">
        <input
          id="MygerPageRadio"
          name="pageSwitcher"
          type="radio"
          onChange={handlePageName}
          value="MygerPage"
        />
        <p>Myger page</p>
      </label>

      {pageName === "MainPage" && <MainPage />}
      {pageName === "TestPage" && <TestPage />}
      {pageName === "MygerPage" && <MygerPage />}
    </section>
  );
};

export { App };
