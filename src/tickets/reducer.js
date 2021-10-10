import {assocPath} from "ramda";
import {git} from "faker";
import * as t from "./actionTypes";
import { reduceLoadData} from "../global/reducerUtils";

import {initialState} from "./initialState";

const create = (action, state) => {
  const id = git.shortSha();
  return assocPath(["byId", id], {...action.payload, id}, state);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.CREATE:
      return create(action, state);
    case t.LOAD_DATA:
      return reduceLoadData(action, state);
    default:
      return state;
  }
};

export default reducer;
