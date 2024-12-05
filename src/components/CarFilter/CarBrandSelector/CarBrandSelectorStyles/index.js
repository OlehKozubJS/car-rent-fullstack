import { CarBrandSelectorNotFoundMessageStyleBase } from "./carBrandSelectorStyle";
import {
  CarBrandSelectorInputLabelStyleBase,
  CarBrandSelectorInputStyleBase,
  CarBrandSelectorInputButtonStyleBase,
} from "./carBrandSelectorInputStyle";
import { menuContainerStyle } from "./carBrandSelectorMenuStyle";
import {
  CarBrandSelectorMenuListContainerStyleBase,
  CarBrandSelectorMenuListStyleBase,
  CarBrandSelectorMenuItemStyleBase,
  CarBrandSelectorMenuOptionRadioStyleBase,
} from "./carBrandSelectorMenuListStyle";
import { scrollRangeStyle } from "./scrollRangeStyle";

const carBrandSelectorStyles = [menuContainerStyle, scrollRangeStyle].join(" ");

export {
  carBrandSelectorStyles,
  CarBrandSelectorNotFoundMessageStyleBase,
  CarBrandSelectorInputLabelStyleBase,
  CarBrandSelectorInputStyleBase,
  CarBrandSelectorInputButtonStyleBase,
  CarBrandSelectorMenuListContainerStyleBase,
  CarBrandSelectorMenuListStyleBase,
  CarBrandSelectorMenuItemStyleBase,
  CarBrandSelectorMenuOptionRadioStyleBase,
};
