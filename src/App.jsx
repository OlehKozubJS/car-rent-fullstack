import { eseEffect, useState } from "react";

import { MainPage, TestPage, MygerPage } from "./pages";

const App = () => {
  return (
    <div>
      {<MainPage />}
      {<TestPage />}
      {<MygerPage />}
    </div>
  );
};

export { App };
