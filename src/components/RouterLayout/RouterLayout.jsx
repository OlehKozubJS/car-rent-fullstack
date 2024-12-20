import { Suspense } from "react";

import { RouterNavigation } from "./RouterNavigation";

const RouterLayout = () => {
  return (
    <div>
      <header>
        <RouterNavigation />
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
