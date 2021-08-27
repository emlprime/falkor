import * as R from "ramda";
import * as t from "./actionTypes";

const {assocPath, path} = R;

const initialState = {
  current: {
    scope: "sprints",
    id: "abc123",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.setCurrentScope:
      return assocPath(
        ["current", "scope"],
        path(["payload", "scope"], action),
        state,
      );
    case t.setCurrentId:
      return state;
    default:
      return state;
  }
};

export default reducer;
