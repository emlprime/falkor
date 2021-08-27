import {combineReducers} from "redux";
import quarters from "./quarters";
import releases from "./releases";
import sprints from "./sprints";

export default combineReducers({
  [quarters.constants.NAME]: quarters.reducer,
  [releases.constants.NAME]: releases.reducer,
  [sprints.constants.NAME]: sprints.reducer,
});
