import { NavLink } from "react-router-dom";

import {
  RouterNavigationContainerStyleBase,
  RouterNavigationLinkStyleBase,
} from "./RouterLayoutStyle";

const RouterNavigation = ({ pages, currentLocation }) => {
  return (
    <RouterNavigationContainerStyleBase>
      {pages.map(({ pagePath, pageTitle }, pageIndex) => {
        return (
          <RouterNavigationLinkStyleBase
            key={pageIndex}
            to={pagePath}
            isactive={currentLocation.pathname === pagePath}
          >
            {pageTitle}
            {(currentLocation.pathname === pagePath).toString()}
          </RouterNavigationLinkStyleBase>
        );
      })}
    </RouterNavigationContainerStyleBase>
  );
};

export { RouterNavigation };
