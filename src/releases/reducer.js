import * as R from "ramda";
import * as t from "./actionTypes";
import {initialState} from "./initialState";

const {assocPath, prop, propOr} = R;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD:
      const data = propOr({}, "payload", action);
      const id = prop(["id"], data);
      return assocPath(["byId", id], data, state);
    default:
      return state;
  }
};

export default reducer;
