import * as R from "ramda";

const {assocPath, prop, propOr} = R;

export function addItem(state, action) {
  const data = propOr({}, "payload", action);
  const id = prop(["id"], data);
  return assocPath(["byId", id], data, state);
}
