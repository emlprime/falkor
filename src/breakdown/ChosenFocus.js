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

import {ProgressChart} from "../global/ProgressChart";

const {map, addIndex, prop} = R;

const mapWithIndex = addIndex(map);

const swimlanes = [
  [["resolved", [0, 40]], ["active", [40, 60]], ["planned", [60, 99.9]]],
  [["resolved", [0, 40]], ["active", [40, 60]], ["planned", [60, 99.9]]],
  [["resolved", [0, 20]], ["active", [20, 60]], ["planned", [60, 99.9]]],
  [["resolved", [0, 40]], ["active", [40, 60]], ["planned", [60, 99.9]]],
];

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

export const ChosenFocus = ({originX, originY}) => {
  // get the current scope
  const currentScope = useSelector(getCurrentScope);
  // select the id for the current scope
  const currentId = useSelector(getCurrentIdForScope(currentScope));
  // figure out progress chart to get based on scope
  const getCurrentFocus = prop(currentScope, scopeToRecordSelector);
  const {label} = useSelector(getCurrentFocus(currentId));
  console.log("currentScope:", currentScope, currentId, label);

  const getCurrentFocusItems = prop(currentScope, scopeToRecordIdsSelector);
  const recordIds = useSelector(getCurrentFocusItems(currentId));
  console.log("recordIds:", recordIds);

  const handleClick = value => {
    console.log("Chosen Focusvalue:", value);
  };
  const width = 130;
  const height = 40;

  return (
    <g>
      <foreignObject
        x={originX - width / 2}
        y={originY - height / 2}
        height={height}
        width={width}
      >
        <h2>{label}</h2>
      </foreignObject>
      {mapWithIndex(
        (values, i) => (
          <ProgressChart
            key={i}
            originX={originX}
            originY={originY}
            radius={80 + i * 10}
            values={values}
            handleClick={handleClick}
            width={5}
          />
        ),
        swimlanes,
      )}
    </g>
  );
};
