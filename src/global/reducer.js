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

const setCurrentTicket = curry((action, state) =>
  assocPath(["current", "ticket"], path(["payload", "ticket"], action), state),
);

const setCurrentItem = curry((action, state) =>
  assocPath(["current", "item"], path(["payload", "item"], action), state),
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.setCurrentAncestry:
      return pipe(setCurrentAncestry(action))(state);
    case t.setCurrentItem:
      return pipe(setCurrentItem(action))(state);
    case t.setCurrentGoal:
      return pipe(setCurrentGoal(action))(state);
    case t.setCurrentTicket:
      return pipe(setCurrentTicket(action))(state);
    default:
      return state;
  }
};

export default reducer;
