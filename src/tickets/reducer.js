import * as t from "./actionTypes";
import {reduceLoadData, reduceUnloadItem} from "../global/reducerUtils";

import {initialState} from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.LOAD_DATA:
      return reduceLoadData(action, state);
    case t.UNLOAD_ITEM:
      return reduceUnloadItem(action, state);
    default:
      return state;
  }
};

export default reducer;
