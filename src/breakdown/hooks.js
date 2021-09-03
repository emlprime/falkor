import * as R from "ramda";
import {useSelector} from "react-redux";
import {getCurrentScope, getCurrentIdForScope} from "../global/selectors";
import {
  getRecordFor as getQuarterFor,
  getRecordIdsFor as getQuarterRecordIdsFor,
} from "../quarters/selectors";
import {
  getRecordFor as getReleaseFor,
  getRecordIdsFor as getReleaseRecordIdsFor,
} from "../releases/selectors";
import {
  getRecordFor as getSprintFor,
  getRecordIdsFor as getSprintRecordIdsFor,
} from "../sprints/selectors";
import {
  getRecordFor as getGoalFor,
  getRecordIdsFor as getGoalRecordIdsFor,
} from "../goals/selectors";
import {
  getRecordFor as getDayFor,
  getRecordIdsFor as getDayRecordIdsFor,
} from "../days/selectors";

const {prop} = R;

const scopeToRecordSelector = {
  quarters: getQuarterFor,
  releases: getReleaseFor,
  sprints: getSprintFor,
  goals: getGoalFor,
  days: getDayFor,
};

const scopeToRecordIdsSelector = {
  quarters: getQuarterRecordIdsFor,
  releases: getReleaseRecordIdsFor,
  sprints: getSprintRecordIdsFor,
  goals: getGoalRecordIdsFor,
  days: getDayRecordIdsFor,
};

export const useCurrentRecordIds = () => {
  // get the current scope
  const currentScope = useSelector(getCurrentScope);
  // select the id for the current scope
  const currentId = useSelector(getCurrentIdForScope(currentScope));
  // figure out progress chart to get based on scope
  const getCurrentFocus = prop(currentScope, scopeToRecordSelector);
  const {label} = useSelector(getCurrentFocus(currentId));

  const getCurrentFocusItems = prop(currentScope, scopeToRecordIdsSelector);
  const recordIds = useSelector(getCurrentFocusItems(currentId));
  return {label, recordIds};
};
