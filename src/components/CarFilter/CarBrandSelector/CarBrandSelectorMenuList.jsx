import {
  CarBrandSelectorMenuListContainerStyleBase,
  CarBrandSelectorMenuListStyleBase,
  CarBrandSelectorMenuItemStyleBase,
  CarBrandSelectorMenuOptionRadioStyleBase,
} from "./CarBrandSelectorStyles";

const CarBrandSelectorMenuList = ({ options, onChange, top }) => {
  return (
    <CarBrandSelectorMenuListContainerStyleBase>
      <CarBrandSelectorMenuListStyleBase className="menu-list" top={top}>
        {options.map((option, optionIndex) => {
          return (
            <CarBrandSelectorMenuItemStyleBase key={optionIndex}>
              <label htmlFor={optionIndex}>
                <CarBrandSelectorMenuOptionRadioStyleBase
                  id={optionIndex}
                  type="radio"
                  name="menu-option-radio"
                  value={option}
                  onChange={onChange}
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
