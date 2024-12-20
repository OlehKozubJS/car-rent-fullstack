import { NavLink } from "react-router-dom";

const RouterNavigation = ({ pages }) => {
  return (
    <nav>
      <ul>
        {() => {
          return (
            <li>
              <NavLink to="/">Car Rent</NavLink>
            </li>
          );
        }}
      </ul>
    </nav>
  );
};

export { RouterNavigation };
