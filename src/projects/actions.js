import * as t from "./actionTypes";

export const add = payload => ({
  type: t.ADD,
  payload,
});

export const loadData = data => ({
  type: t.LOAD_DATA,
  payload: {data},
});

export const fetch = () => ({
  type: t.FETCH,
});

export const actions = {add, loadData, fetch};
