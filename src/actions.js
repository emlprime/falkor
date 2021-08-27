import * as t from "./actionTypes";

export const setCurrentScope = scope => ({
  type: t.setCurrentScope,
  payload: {scope},
});

export const setId = id => ({
  type: t.setCurrentId,
  payload: {id},
});
