import * as R from "ramda";
import * as t from "./actionTypes";
import {initialState} from "./initialState";

const {assocPath, curry, path, pipe} = R;

const setCurrentAncestry = curry((action, state) =>
  assocPath(
    ["current", "ancestry"],
    path(["payload", "ancestry"], action),
    state,
  ),
);

const setCurrentGoal = curry((action, state) =>
  assocPath(["current", "goal"], path(["payload", "goalKey"], action), state),
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.setCurrentAncestry:
      return pipe(setCurrentAncestry(action))(state);
    case t.setCurrentGoal:
      return pipe(setCurrentGoal(action))(state);
    default:
      return state;
  }
};

export default reducer;
