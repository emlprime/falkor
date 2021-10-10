import * as t from "./actionTypes";
import {initialState} from "./initialState";
import {addItem, reduceLoadData} from "../global/reducerUtils";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD:
      return addItem(action.payload, state);
    case t.LOAD_DATA:
      return reduceLoadData(action, state);
    default:
      return state;
  }
};

export default reducer;
