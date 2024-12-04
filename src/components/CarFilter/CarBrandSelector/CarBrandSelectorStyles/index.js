import { CarBrandSelectorNotFoundMessageStyle } from "./carBrandSelectorStyle";
import { carFilterInputStyle } from "./carBrandSelectorInputStyle";
import { menuContainerStyle } from "./carBrandSelectorMenuStyle";
import { menuListStyle } from "./carBrandSelectorMenuListStyle";
import { scrollRangeStyle } from "./scrollRangeStyle";

const carBrandSelectorStyles = [
  carFilterInputStyle,
  menuContainerStyle,
  menuListStyle,
  scrollRangeStyle,
].join(" ");

export { carBrandSelectorStyles, CarBrandSelectorNotFoundMessageStyle };
