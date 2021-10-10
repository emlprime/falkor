import {curry} from "ramda";
import * as t from "./actionTypes";

export const create = curry((model, parentId, label) => ({
  type: t.CREATE,
  payload: {model, parentId, label, status: "PLANNED"},
}));

export const loadData = data => ({
  type: t.LOAD_DATA,
  payload: {data},
});

export const actions = {create, loadData};
