import { /*useEffect,*/ useState } from "react";

import { carsLocalData } from "./database";

import { MainPage, TestPage, MygerPage } from "./pages";

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
        <nav>
          <ul>
            {Object.keys(pages).map((pageName) => {
              return (
                <li key={pageName}>
                  <label htmlFor={pageName}>
                    <input
                      id={pageName}
                      name="pageSwitcher"
                      type="radio"
                      onChange={handleCurrentPageName}
                      value={pageName}
                      checked={currentPageName === pageName}
                    />
                    <span>{pageName}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main>{pages[currentPageName]}</main>
    </div>
  );
};

export { App };
