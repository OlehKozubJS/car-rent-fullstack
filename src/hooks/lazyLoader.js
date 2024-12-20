import { lazy } from "react";

const lazyLoader = (pageNames) => {
  return pageNames.map((pageName) => {
    return lazy(() => import(`pages${pageName}`));
  });
};

export { lazyLoader };
