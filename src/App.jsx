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
  const [currentPageName, setCurrentPageName] = useState("Main page");

  const handleCurrentPageName = (event) => {
    setCurrentPageName(event.target.value);
  };

  return (
    <div style={{ fontFamily: "Manrope-Regular" }}>
      <header>
        <PageNavigation onChange={handleCurrentPageName} />
      </header>
      <main>{pages[currentPageName]}</main>
    </div>
  );
};

export { App };
