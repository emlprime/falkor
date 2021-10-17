import * as t from "./actionTypes";

export const setCurrentItemByModelAndStatus = (model, status) => ({
  type: t.setCurrentItemByModelAndStatus,
  payload: {model, status},
});

export const setCurrentId = (scope, id) => ({
  type: t.setCurrentId,
  payload: {scope, id},
});

export const setCurrentTicket = ticket => ({
  type: t.setCurrentTicket,
  payload: {ticket},
});

export const setCurrentAncestry = ancestry => ({
  type: t.setCurrentAncestry,
  payload: {ancestry},
});

export const setCurrentGoal = goalKey => ({
  type: t.setCurrentGoal,
  payload: {goalKey},
});

export const setCurrentItem = item => ({
  type: t.setCurrentItem,
  payload: {item},
});
