import {assocPath} from "ramda";
import * as t from "./actionTypes";

import {initialState} from "./initialState";

const create = (action, state) => {
  return assocPath(["byId", "foo"], action.payload, state);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.CREATE:
      return create(action, state);
    default:
      return state;
  }
};

export default reducer;
