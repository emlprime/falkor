import * as t from "./actionTypes";

export const setCurrentItemByModelAndStatus = (model, status) => ({
  type: t.setCurrentItemByModelAndStatus,
  payload: {model, status},
});

export const setCurrentId = (scope, id) => ({
  type: t.setCurrentId,
  payload: {scope, id},
});

export const setCurrentAncestry = ancestry => ({
  type: t.setCurrentAncestry,
  payload: {ancestry},
});
