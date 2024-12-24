import { carsLocalData, makesLocalData } from "../database";

import {
  carModel,
  setCarModel,
  getCarModel,
  selectedCars,
  setSelectedCars,
  getSelectedCars,
  handleEventListener,
  handleInterval,
  handleTimeOut,
} from "../hooks";

import { CarFilter, CarGallery, CarModal } from "../components";

import { vanillaReducer } from "../redux";

import { SVGimage } from "../images";

export {
  carsLocalData,
  makesLocalData,
  carModel,
  setCarModel,
  getCarModel,
  selectedCars,
  setSelectedCars,
  getSelectedCars,
  handleEventListener,
  handleInterval,
  handleTimeOut,
  CarFilter,
  CarGallery,
  CarModal,
  vanillaReducer,
};
