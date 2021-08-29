import * as t from "./actionTypes";

import {initialState} from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD:
      return [];
    default:
      return state;
  }
};

export default reducer;
