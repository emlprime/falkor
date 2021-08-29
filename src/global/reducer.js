import * as R from "ramda";
import * as t from "./actionTypes";
import {initialState} from "./initialState";

const {assocPath, path, curry} = R;

const setCurrentScope = curry((state, action) =>
  assocPath(["current", "scope"], path(["payload", "scope"], action), state),
);

const setCurrentId = curry((state, action) =>
  assocPath(["current", "id"], path(["payload", "id"], action), state),
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
