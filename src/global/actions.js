import * as t from "./actionTypes";

export const setCurrentScope = scope => ({
  type: t.setCurrentScope,
  payload: {scope},
});

export const setCurrentId = (scope, id) => ({
  type: t.setCurrentId,
  payload: {scope, id},
});
