const CarBrandSelectorMenuList = ({ options, onChange, top }) => {
  return (
    <ul className="menu-list" style={{ top: `${top}px` }}>
      {options.map((option, optionIndex) => {
        return (
          <li key={optionIndex} className="menu-item">
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

export { CarBrandSelectorMenuList };
