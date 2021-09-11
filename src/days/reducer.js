import * as t from "./actionTypes";
import {addItem} from "../global/reducerUtils";

import {initialState} from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD:
      return addItem(action.payload, state);
    default:
      return state;
  }
};

export default reducer;
