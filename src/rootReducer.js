import {combineReducers} from "redux";
import quarters from "./quarters";
import releases from "./releases";
import sprints from "./sprints";
import days from "./days";
import globalReducer from "./globalReducer";

export default combineReducers({
  [quarters.constants.NAME]: quarters.reducer,
  [releases.constants.NAME]: releases.reducer,
  [sprints.constants.NAME]: sprints.reducer,
  [days.constants.NAME]: days.reducer,
  global: globalReducer,
});
