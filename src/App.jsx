import { eseEffect, useState } from "react";

import { MainPage, TestPage, MygerPage } from "./pages";

const App = () => {
  const [] = useState();

  return (
    <div>
      {<MainPage />}
      {<TestPage />}
      {<MygerPage />}
    </div>
  );
};

export { App };
