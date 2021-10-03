import {curry} from "ramda";
import * as t from "./actionTypes";

export const create = curry((model, parentId, label) => ({
  type: t.CREATE,
  payload: {model, parentId, label, status: "PLANNED"},
}));
