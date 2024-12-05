import {
  CarBrandSelectorMenuListContainerStyleBase,
  CarBrandSelectorMenuListStyleBase,
  CarBrandSelectorMenuItemStyleBase,
  CarBrandSelectorMenuOptionRadioStyleBase,
} from "./CarBrandSelectorStyles";

const CarBrandSelectorMenuList = ({ options, onChange, top }) => {
  return (
    <CarBrandSelectorMenuListContainerStyleBase className="menu-list-container">
      <CarBrandSelectorMenuListStyleBase
        className="menu-list"
        style={{ top: `${top}px` }}
      >
        {options.map((option, optionIndex) => {
          return (
            <CarBrandSelectorMenuItemStyleBase
              key={optionIndex}
              className="menu-item"
            >
              <label htmlFor={optionIndex}>
                <CarBrandSelectorMenuOptionRadioStyleBase
                  id={optionIndex}
                  type="radio"
                  name="menu-option-radio"
                  value={option}
                  onChange={onChange}
                  className="menu-option-radio"
                />
                <span>{option}</span>
              </label>
            </CarBrandSelectorMenuItemStyleBase>
          );
        })}
      </CarBrandSelectorMenuListStyleBase>
    </CarBrandSelectorMenuListContainerStyleBase>
  );
};

export { CarBrandSelectorMenuList };
