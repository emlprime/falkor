import {combineReducers} from "redux";
import quarters from "./quarters";
import projects from "./projects";
import releases from "./releases";
import sprints from "./sprints";
import days from "./days";
import goals from "./goals";
import global from "./global";

export default combineReducers({
  [projects.constants.NAME]: projects.reducer,
  [quarters.constants.NAME]: quarters.reducer,
  [releases.constants.NAME]: releases.reducer,
  [sprints.constants.NAME]: sprints.reducer,
  [goals.constants.NAME]: goals.reducer,
  [days.constants.NAME]: days.reducer,
  global: global.reducer,
});
