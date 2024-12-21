import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { RouterNavigation } from "./RouterNavigation";

const RouterLayout = ({ pages }) => {
  return (
    <div>
      <header>
        <RouterNavigation pages={pages} />
      </header>
      <main>
        <Suspense downfall={<section>loading...</section>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
};

export { RouterLayout };
