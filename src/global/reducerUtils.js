import * as R from "ramda";

const {assocPath, curry, prop} = R;

export const addItem = curry((payload, state) => {
  const id = prop("id", payload);
  return assocPath(["byId", id], payload, state);
});
