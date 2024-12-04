import { CarBrandSelectorNotFoundMessageStyle } from "./carBrandSelectorStyle";
import {
  СarBrandSelectorInputLabelStyleBase,
  СarBrandSelectorInputStyleBase,
  СarBrandSelectorInputButtonStyleBase,
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
  СarBrandSelectorInputLabelStyleBase,
  СarBrandSelectorInputStyleBase,
  СarBrandSelectorInputButtonStyleBase,
};
