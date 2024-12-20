import { NavLink } from "react-router-dom";

const RouterNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Car Rent</NavLink>
        </li>
        <li>
          <NavLink to="/FavouriteCars">Favourite Cars</NavLink>
        </li>
        <li>
          <NavLink to="/TestOne">Test One</NavLink>
        </li>
        <li>
          <NavLink to="TestTwo">Test Two</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { RouterNavigation };
