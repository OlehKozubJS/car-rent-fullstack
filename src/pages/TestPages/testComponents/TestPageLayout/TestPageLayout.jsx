import { Outlet, NavLink } from "react-router-dom";

const TestPageOne = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="tests">Various tests</NavLink>
        </li>
        <li>
          <NavLink to="stars">Stars effect tests</NavLink>
        </li>
        <li>
          <NavLink to="moir">Moir test</NavLink>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default TestPageOne;
