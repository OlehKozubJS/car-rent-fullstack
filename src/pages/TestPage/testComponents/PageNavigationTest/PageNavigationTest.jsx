const PageNavigationTest = ({ pages, onChange, currentPageName }) => {
  const handleCurrentPage = (event) => {
    onChange(pages.find(({ name }) => event.target.value === name));
  };

  return (
    <nav>
      <ul>
        {pages.map(({ name }) => {
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

export { PageNavigationTest };
