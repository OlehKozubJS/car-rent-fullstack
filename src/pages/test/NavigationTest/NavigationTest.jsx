import { useState } from "react";

import { Navigate } from "react-router-dom";

const NavigationTest = () => {
  const [pagePath, setPagePath] = useState("test");

  const handlePagePath = (event) => {
    event.preventDefault();
    setPagePath(event.currentTarget.elements.pageNameInput.value);
    event.currentTarget.reset();
  };

  return (
    <section>
      <form onSubmit={handlePagePath}>
        <input name="pageNameInput" type="text" placeholder="Enter page name" />
        <button type="submit">Enter</button>
      </form>
      <Navigate to={`/${pagePath}`} />
    </section>
  );
};

export { NavigationTest };
