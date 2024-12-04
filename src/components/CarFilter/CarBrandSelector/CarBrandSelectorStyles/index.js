import { CarBrandSelectorNotFoundMessageStyle } from "./carBrandSelectorStyle";
import {
  CarBrandSelectorInputLabelStyleBase,
  CarBrandSelectorInputStyleBase,
  CarBrandSelectorInputButtonStyleBase,
} from "./carBrandSelectorInputStyle";
import { menuContainerStyle } from "./carBrandSelectorMenuStyle";
import { menuListStyle } from "./carBrandSelectorMenuListStyle";
import { scrollRangeStyle } from "./scrollRangeStyle";

const carBrandSelectorStyles = [
  menuContainerStyle,
  menuListStyle,
  scrollRangeStyle,
].join(" ");

export {
  carBrandSelectorStyles,
  CarBrandSelectorNotFoundMessageStyle,
  CarBrandSelectorInputLabelStyleBase,
  CarBrandSelectorInputStyleBase,
  CarBrandSelectorInputButtonStyleBase,
};
