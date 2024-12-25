import { Outlet, NavLink } from "react-router-dom";

const TestPageLayout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="TestOne/tests">Various tests</NavLink>
        </li>
        <li>
          <NavLink to="TestOne/stars">Stars effect tests</NavLink>
        </li>
        <li>
          <NavLink to="TestOne/moir">Moir test</NavLink>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export { TestPageLayout };
