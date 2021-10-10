import * as R from "ramda";

const {assocPath, curry, prop, reduce, path} = R;

export const addItem = curry((payload, state) => {
  const id = prop("id", payload);
  return assocPath(["byId", id], payload, state);
});

const loadDataReducer = (state, item) => {
  const id = prop("id", item);
  return assocPath(["byId", id], item, state);
};
export const reduceLoadData = curry((action, state) =>
  reduce(loadDataReducer, state, path(["payload", "data"], action)),
);
