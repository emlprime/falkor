import * as t from "./actionTypes";
import {initialState} from "./initialState";
import {addItem} from "../global/reducerUtils";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD:
      return addItem(state, action);
    default:
      return state;
  }
};

export default reducer;
