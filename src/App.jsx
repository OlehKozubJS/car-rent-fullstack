import { eseEffect, useState } from "react";

import { MainPage, TestPage, MygerPage } from "./pages";

const App = () => {
  const [pageName, setPageName] = useState([
    "MainPage",
    "TestPage",
    "MygerPage",
  ]);

  return (
    <section>
      <label htmlFor="mainPageRadio">
        <input id="mainPageRadio" name="pageSwitcher" />
      </label>
      <label htmlFor="testPageRadio">
        <input id="testPageRadio" name="pageSwitcher" />
      </label>
      <label htmlFor="mygerPageRadio">
        <input id="mygerPageRadio" name="pageSwitcher" />
      </label>

      {pageName === "MainPage" && <MainPage />}
      {pageName === "TestPage" && <TestPage />}
      {pageName === "MygerPage" && <MygerPage />}
    </section>
  );
};

export { App };
