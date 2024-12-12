import { /*useEffect,*/ useState } from "react";

import { carsLocalData } from "./database";

import { MainPage, TestPage, MygerPage } from "./pages";

import { PageNavigation } from "./components";

import "./style";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Main page");

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ fontFamily: "Manrope-Regular" }}>
      <header>
        <PageNavigation
          pagesObject={{
            name:"Main page", : <MainPage cars={carsLocalData.slice(0, 25)} />,
            name: "Test page", : <TestPage />,
            name: "Myger page", : <MygerPage />,
          }}
          onChange={handleCurrentPage}
        />
      </header>
      <main>{currentPage}</main>
    </div>
  );
};

export { App };
