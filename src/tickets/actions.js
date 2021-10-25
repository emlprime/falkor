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

export const deleteItem = item => ({
  type: t.DELETE,
  payload: {item},
});

export const unloadItem = item => ({
  type: t.UNLOAD_ITEM,
  payload: {item},
});

export const actions = {create, loadData, deleteItem, unloadItem};
