import {initialState as globalInitialState} from "./global/initialState";
import {initialState as quartersInitialState} from "./quarters/initialState";
import {initialState as releasesInitialState} from "./releases/initialState";

export const initialState = {
  global: globalInitialState,
  quarters: quartersInitialState,
  releases: releasesInitialState,
};
