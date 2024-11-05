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
                name="option"
                value={option}
                onChange={onChange}
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
