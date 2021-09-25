import {curry} from "ramda";
import * as t from "./actionTypes";

export const create = curry((model, parentId, goalId, label) => ({
  type: t.CREATE,
  payload: {model, parentId, goalId, label, id: "foo", status: "PLANNED"},
}));
