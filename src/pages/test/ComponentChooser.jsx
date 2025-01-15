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
      {componentNames.map((value) => {
        return (
          <label key={value} htmlFor={value}>
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
        );
      })}
    </nav>
  );
};

export { ComponentChooser };
