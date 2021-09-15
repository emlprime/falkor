import * as R from "ramda";
import {createSelector} from "reselect";
import {NAME} from "./constants";

const {curry, equals, last, prop, pathOr} = R;

export const getAll = state => state[NAME];

export const getCurrent = state => pathOr({}, [NAME, "current"], state);

export const getCurrentAncestry = createSelector(
  getCurrent,
  current => prop("ancestry", current),
);

export const getCurrentGoal = createSelector(
  getCurrent,
  current => prop("goal", current),
);

export const getCurrentItem = createSelector(
  getCurrentAncestry,
  currentAncestry => last(currentAncestry),
);

export const getCurrentModel = createSelector(
  getCurrentItem,
  currentItem => prop("model", currentItem),
);

export const getIsCurrent = itemKey =>
  createSelector(
    getCurrentItem,
    currentItem => equals(itemKey, currentItem),
  );

export const getByItem = curry(({model, id}, state) => {
  return pathOr({}, [model, "byId", id], state);
});

export const getItemsByParent = curry(({model, id}, state) => {
  console.log("model", model, id);
  console.log("state", state);
  return [];
});

// pathOr({}, [model, "byId", id], state);
