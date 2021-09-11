import {useCallback, useState} from "react";
import {colors} from "../global/constants";
import * as R from "ramda";
import {useSelector, useDispatch} from "react-redux";
import {getCurrentScope, getCurrentIdForScope} from "../global/selectors";
import {
  getRecordFor as getQuarterFor,
  getRecordIdsFor as getQuarterRecordIdsFor,
} from "../quarters/selectors";
import {
  getRecordFor as getReleaseFor,
  getRecordIdsFor as getReleaseRecordIdsFor,
} from "../releases/selectors";
import {add as addRelease} from "../releases/actions";
import {
  getRecordFor as getSprintFor,
  getRecordIdsFor as getSprintRecordIdsFor,
} from "../sprints/selectors";
import {add as addSprint} from "../sprints/actions";
import {
  getRecordFor as getGoalFor,
  getRecordIdsFor as getGoalRecordIdsFor,
} from "../goals/selectors";
import {
  getRecordFor as getDayFor,
  getRecordIdsFor as getDayRecordIdsFor,
} from "../days/selectors";
import {add as addDay} from "../days/actions";
import styled from "styled-components";

const {add, gt, last, map, sum, prop} = R;

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

const addActions = {
  quarters: addRelease,
  releases: addSprint,
  sprints: addDay,
};

const scopeLength = 4;
const AddButton = ({
  offset,
  itemWidth,
  gap,
  originX,
  originY,
  scope,
  parentId,
}) => {
  const [label, setLabel] = useState("");
    const dispatch = useDispatch();
    const addAction = prop(scope, addActions)
  const onClick = useCallback(() => {
    dispatch(addAction({scope, parentId, label}));
  }, [dispatch, scope, parentId, label]);
  const xOffset = offset * (itemWidth + gap);

  return (
    <foreignObject
      width={200}
      height={100}
      x={add(originX, xOffset)}
      y={originY + 40}
    >
      <Article>
        <textarea
          type="text"
          id="add"
          name="label"
          value={label}
          onChange={e => setLabel(e.target.value)}
        />
        <div>
          <button onClick={onClick}>Add</button>
        </div>
      </Article>
    </foreignObject>
  );
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
  const records = map(recordId => [recordId, 1], recordIds);
  const recordLength = sum(map(last, records));
  const canAdd = gt(scopeLength, recordLength);
  const AddActionButton = canAdd
    ? props => (
        <AddButton
          {...props}
          scope={currentScope}
          parentId={currentId}
          offset={recordLength}
        />
      )
    : null;
  console.log(`currentScope:`, currentScope);
  return {label, records, AddActionButton, scope: currentScope};
};

const Article = styled.article`
  textarea,
  button {
    background: transparent;
    border: 1px solid ${colors.planned};
    color: ${colors.planned};
  }
`;
