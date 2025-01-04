import { NavLink } from "react-router-dom";

import {
  RouterNavigationContainerStyleBase,
  RouterNavigationLinkStyleBase,
} from "./RouterLayoutStyle";

const RouterNavigation = ({ pages }) => {
  return (
    <nav>
      {pages.map(({ pagePath, pageTitle }, pageIndex) => {
        return (
          <NavLink key={pageIndex} to={pagePath}>
            {pageTitle}
          </NavLink>
        );
      })}
    </nav>
  );
};

export { RouterNavigation };
