import { /*useEffect,*/ useState } from "react";

import { carsLocalData } from "./database";

import { MainPage, TestPage, MygerPage } from "./pages";

import { PageNavigation } from "./components";

import "./style";

const App = () => {
  const [pages] = useState({
    "Main page": <MainPage cars={carsLocalData.slice(0, 25)} />,
    "Test page": <TestPage />,
    "Myger page": <MygerPage />,
  });
  const [currentPage, setCurrentPage] = useState("Main page");

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ fontFamily: "Manrope-Regular" }}>
      <header>
        <PageNavigation
          pagesObject={{
            "Main page": <MainPage cars={carsLocalData.slice(0, 25)} />,
            "Test page": <TestPage />,
            "Myger page": <MygerPage />,
          }}
          onChange={handleCurrentPageName}
        />
      </header>
      <main>{pages[currentPageName]}</main>
    </div>
  );
};

export { App };
