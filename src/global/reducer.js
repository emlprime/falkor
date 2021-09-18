import * as R from "ramda";
import * as t from "./actionTypes";
import {initialState} from "./initialState";
import {scopeToIdKey} from "./constants";

const {assocPath, curry, path, pathOr, pipe, prop, propOr} = R;

const setCurrentItemByModelAndStatus = curry((action, state) => {
  const {model, status} = propOr({}, "payload", action);
  const current = pathOr({}, ["global", "current"], state);
  console.log("model and status:", model, status);
  console.log("current:", current);
  console.log("state:", state);
  return state;
});

const setCurrentId = curry((action, state) =>
  assocPath(
    ["current", prop(path(["payload", "scope"], action), scopeToIdKey)],
    path(["payload", "id"], action),
    state,
  ),
);

const setCurrentAncestry = curry((action, state) =>
  assocPath(
    ["current", "ancestry"],
    path(["payload", "ancestry"], action),
    state,
  ),
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.setCurrentItemByModelAndStatus:
      return setCurrentItemByModelAndStatus(action, state);
    case t.setCurrentId:
      return pipe(setCurrentId(action))(state);
    case t.setCurrentAncestry:
      return pipe(setCurrentAncestry(action))(state);
    default:
      return state;
  }
};

export default reducer;
