import * as R from "ramda";
import * as t from "./actionTypes";
import {initialState} from "./initialState";
import {scopeToIdKey} from "./constants";

const {assocPath, path, curry, prop} = R;

const setCurrentScope = curry((state, action) =>
  assocPath(["current", "scope"], path(["payload", "scope"], action), state),
);

const setCurrentId = curry((state, action) =>
  assocPath(
    ["current", prop(path(["payload", "scope"], action), scopeToIdKey)],
    path(["payload", "id"], action),
    state,
  ),
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.setCurrentScope:
      return setCurrentScope(state, action);
    case t.setCurrentId:
      return setCurrentId(state, action);
    default:
      return state;
  }
};

export default reducer;
