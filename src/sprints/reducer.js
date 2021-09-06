import * as R from "ramda";
import * as t from "./actionTypes";
import {initialState} from "./initialState";

const {assocPath, prop} = R;

const addItem = (payload, state) => {
  const id = prop("id", payload);
  return assocPath(["byId", id], payload, state);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD:
      return addItem(action.payload, state);
    default:
      return state;
  }
};

export default reducer;
