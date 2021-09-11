import * as R from "ramda";
import * as t from "./actionTypes";
import {initialState} from "./initialState";
import {scopeToIdKey} from "./constants";

const {assocPath, curry, path, pipe, prop} = R;

const setCurrentScope = curry((action, state) =>
  assocPath(["current", "scope"], path(["payload", "scope"], action), state),
);

const setCurrentId = curry((action, state) =>
  assocPath(
    ["current", prop(path(["payload", "scope"], action), scopeToIdKey)],
    path(["payload", "id"], action),
    state,
  ),
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.setCurrentScope:
      return setCurrentScope(action, state);
    case t.setCurrentId:
      return pipe(
        setCurrentScope(action),
        setCurrentId(action),
      )(state);
    default:
      return state;
  }
};

export default reducer;
