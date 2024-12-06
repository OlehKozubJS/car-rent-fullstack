import { cars } from "./database";

import { MainPage, TestPage } from "./pages";

import { ManropeR } from "./style";

const App = () => {
  return (
    <div className={ManropeR}>
      <MainPage />
      <TestPage />
    </div>
  );
};

export { App };
