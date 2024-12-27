import { Outlet, NavLink } from "react-router-dom";

const TestPageLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="tests">Various tests</NavLink>
          </li>
          <li>
            <NavLink to="stars">Stars effect test</NavLink>
          </li>
          <li>
            <NavLink to="moir">Moir test</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export { TestPageLayout };
