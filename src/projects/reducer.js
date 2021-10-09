import {assocPath, curry, path, prop, reduce} from "ramda";
import * as t from "./actionTypes";
import {initialState} from "./initialState";

const loadDataReducer = (state, item) => {
  const id = prop("id", item);
  return assocPath(["byId", id], item, state);
};
const reduceLoadData = curry((action, state) =>
  reduce(loadDataReducer, state, path(["payload", "data"], action)),
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD:
      return [];
    case t.LOAD_DATA:
      return reduceLoadData(action, state);
    default:
      return state;
  }
};

export default reducer;
