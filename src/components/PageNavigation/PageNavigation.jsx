const PageNavigation = ({ page, onClick, currentPageName }) => {
  const handleCurrentPage = (event) => {
    onClick({ [event.target.value]: pagesObject[event.target.value] });
  };

  return (
    <nav>
      <ul>
        {pages.map(({ name, page }) => {
          return (
            <li key={name}>
              <label htmlFor={name}>
                <input
                  id={name}
                  name="pageSwitcher"
                  type="radio"
                  onChange={handleCurrentPage}
                  value={name}
                  checked={currentPageName === name}
                />
                <span>{name}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { PageNavigation };
