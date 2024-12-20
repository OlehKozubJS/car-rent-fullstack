import { NavLink } from "react-router-dom";

const RouterNavigation = ({ pages }) => {
  return (
    <nav>
      <ul>
        {pages.map(({ pagePath, pageTitle }, pageIndex) => {
          return (
            <li key={pageIndex}>
              <NavLink to={pagePath}>{pageTitle}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { RouterNavigation };
