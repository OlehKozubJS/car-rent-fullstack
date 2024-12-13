import { /*useEffect,*/ useState } from "react";

import { carsLocalData } from "./database";

import { MainPage, TestPage, MygerPage, FavouritesPage } from "./pages";

import { PageNavigation } from "./components";

import "./style";

const App = () => {
  const [currentPage, setCurrentPage] = useState({
    name: "Main page",
    page: <MainPage cars={carsLocalData.slice(0, 25)} />,
  });

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ fontFamily: "Manrope-Regular" }}>
      <header>
        <PageNavigation
          pages={[
            {
              name: "Main page",
              page: <MainPage cars={carsLocalData.slice(0, 25)} />,
            },
            {
              name: "Test page",
              page: <TestPage />,
            },
            {
              name: "Myger page",
              page: <MygerPage />,
            },
          ]}
          onChange={handleCurrentPage}
          currentPageName={currentPage.name}
        />
      </header>
      <main>{currentPage.page}</main>
    </div>
  );
};

export { App };
