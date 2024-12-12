const PageNavigation = ({ pagesObject, onClick, currentPageName }) => {
  const handleCurrentPage = (event) => {
    onClick(pagesObject[event.target.value]);
  };

  return (
    <nav>
      <ul>
        {Object.keys(pagesObject).map((pageName) => {
          return (
            <li key={pageName}>
              <label htmlFor={pageName}>
                <input
                  id={pageName}
                  name="pageSwitcher"
                  type="radio"
                  onChange={handleCurrentPage}
                  value={pageName}
                  checked={currentPageName === pageName}
                />
                <span>{pageName}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { PageNavigation };
