import { eseEffect, useState } from "react";

import { MainPage, TestPage, MygerPage } from "./pages";

const App = () => {
  const [] = useState(["MainPage", "TestPage", "MygerPage"]);

  return (
    <div>
      {<MainPage />}
      {<TestPage />}
      {<MygerPage />}
    </div>
  );
};

export { App };
