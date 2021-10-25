import * as R from "ramda";

const {assocPath, curry, lensProp, prop, reduce, omit, over, path} = R;

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

export const reduceUnloadItem = curry((action, state) => {
  console.log(`reduceUnloadItem action:`, {action, state});
  const {model, id} = path(["payload", "item"], action);
  console.log(`model:`, model, id);

  return over(lensProp("byId"), omit([id]), state);
});
