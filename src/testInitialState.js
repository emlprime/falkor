import {initialState as globalInitialState} from "./global/initialState";
import {initialState as projectsInitialState} from "./projects/initialState";
import {initialState as quartersInitialState} from "./quarters/initialState";
import {initialState as releasesInitialState} from "./releases/initialState";
import {initialState as sprintsInitialState} from "./sprints/initialState";
import {initialState as daysInitialState} from "./days/initialState";

export const initialState = {
  global: globalInitialState,
  projects: projectsInitialState,
  quarters: quartersInitialState,
  releases: releasesInitialState,
  sprints: sprintsInitialState,
  days: daysInitialState,
};
