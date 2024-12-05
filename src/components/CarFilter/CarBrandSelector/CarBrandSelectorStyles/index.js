import { CarBrandSelectorNotFoundMessageStyleBase } from "./carBrandSelectorStyle";
import {
  CarBrandSelectorInputLabelStyleBase,
  CarBrandSelectorInputStyleBase,
  CarBrandSelectorInputButtonStyleBase,
} from "./carBrandSelectorInputStyle";
import { menuContainerStyle } from "./carBrandSelectorMenuStyle";
import {
  MenuListContainerStyleBase,
  MenuItemStyleBase,
} from "./carBrandSelectorMenuListStyle";
import { scrollRangeStyle } from "./scrollRangeStyle";

const carBrandSelectorStyles = [
  menuContainerStyle,
  menuListStyle,
  scrollRangeStyle,
].join(" ");

export {
  carBrandSelectorStyles,
  CarBrandSelectorNotFoundMessageStyleBase,
  CarBrandSelectorInputLabelStyleBase,
  CarBrandSelectorInputStyleBase,
  CarBrandSelectorInputButtonStyleBase,
};
