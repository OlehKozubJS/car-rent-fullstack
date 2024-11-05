const CarFilterOptionsSelector = ({ options, onChange }) => {
  return (
    <ul className="menu-list">
      {options.map((option, optionIndex) => {
        return (
          <li key={optionIndex}>
            <label htmlFor={optionIndex}>
              <input
                id={optionIndex}
                type="radio"
                name="menu-option-radio"
                value={option}
                onChange={onChange}
                className="menu-option-radio"
              />
              <span>{option}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export { CarFilterOptionsSelector };
