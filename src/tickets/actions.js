import {curry} from "ramda";
import * as t from "./actionTypes";

export const create = curry((model, parentKey, goalKey, label) => ({
  type: t.CREATE,
  payload: {model, parentKey, goalKey, label, status: "PLANNED"},
}));

export const loadData = data => ({
  type: t.LOAD_DATA,
  payload: {data},
});

export const deleteItem = ticket => ({
  type: t.DELETE,
  payload: {ticket, foo: "bar"},
});

export const actions = {create, loadData};
