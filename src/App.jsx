import { useEffect, useState, lazy, Suspense } from "react";

import { carsLocalData } from "./database";

const MainPage = lazy();
const TestPage = lazy();
const MygerPage = lazy();
const FavouritesPage = lazy();

import { PageNavigation } from "./components";

import "./style";

const App = () => {
  const [favouriteCars, setFavouriteCars] = useState([]);

  const handleFavouriteCars = (carData) => {
    console.log(carData);
    setFavouriteCars([...favouriteCars, carData]);
  };

  useEffect(() => {
    console.log(favouriteCars);
  }, [favouriteCars]);

  const [currentPage, setCurrentPage] = useState({
    name: "Favourites page",
    page: (
      <FavouritesPage
        cars={favouriteCars}
        onFavouriteClick={handleFavouriteCars}
      />
    ),
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
              page: (
                <MainPage
                  cars={carsLocalData}
                  onFavouriteClick={handleFavouriteCars}
                />
              ),
            },
            {
              name: "Favourites page",
              page: (
                <FavouritesPage
                  cars={favouriteCars}
                  onFavouriteClick={handleFavouriteCars}
                />
              ),
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
