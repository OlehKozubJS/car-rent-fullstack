const PageNavigation = ({ page, onClick, currentPageName = "" }) => {
  const handleCurrentPage = (event) => {
    onClick({ [event.target.value]: pagesObject[event.target.value] });
  };

  return (
    <nav>
      <ul>
        {pages.map((page) => {
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
