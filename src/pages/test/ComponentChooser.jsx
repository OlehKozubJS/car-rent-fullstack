const ComponentChooser = ({
  componentNames,
  currentComponentName,
  onChange,
}) => {
  const chooseComponent = ({ target }) => {
    onChange(target.value);
  };

  return (
    <nav>
      <ul>
        {componentNames.map((value) => {
          return (
            <li key={value}>
              <label htmlFor={value}>
                <input
                  id={value}
                  name="chooseComponentRadio"
                  type="radio"
                  value={value}
                  onChange={chooseComponent}
                  checked={currentComponentName === value}
                />
                <span>{value}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { ComponentChooser };
