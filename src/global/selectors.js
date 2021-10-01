import * as R from "ramda";
import {createSelector} from "reselect";
import {NAME} from "./constants";
import {getChildModel} from "./utils";

const {
  curry,
  equals,
  filter,
  prepend,
  find,
  head,
  isNil,
  includes,
  last,
  map,
  pick,
  pipe,
  prop,
  path,
  pathOr,
  propEq,
  values,
} = R;

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

export const getCurrentByModel = model =>
  createSelector(
    getCurrentAncestry,
    currentAncestry => find(propEq("model", model), currentAncestry),
  );

export const getCurrentProject = createSelector(
  getCurrentAncestry,
  currentAncestry => head(currentAncestry),
);

export const getCurrentModel = createSelector(
  getCurrentItem,
  currentItem => prop("model", currentItem),
);

export const getIsCurrent = itemKey =>
  createSelector(
    getCurrentAncestry,
    currentAncestry => includes(itemKey, currentAncestry),
  );

export const getIsCurrentGoal = itemKey =>
  createSelector(
    getCurrentGoal,
    currentGoal => equals(itemKey, currentGoal),
  );

export const getByItem = curry(({model, id}, state) =>
  pathOr({}, [model, "byId", id], state),
);

const getRecordsByModel = curry((model, state) =>
  pipe(
    path([model, "byId"]),
    values,
  )(state),
);

const filterByParent = curry((parentId, records) =>
  pipe(
    filter(propEq("projectId", parentId)),
    map(pick(["model", "id"])),
  )(records),
);

export const getItemsByParent = curry(({model, id}, state) => {
  const childModel = getChildModel(model);
  return pipe(
    getRecordsByModel(childModel),
    filterByParent({model, id}),
  )(state);
});

export const makeGetAncestryByDescendents = curry(
  (parentKey, descendents) => state => {
    const {model, id} = head(descendents);
    const parentId = path([model, "byId", id, parentKey], state);
    return isNil(parentId) ? descendents : prepend(parentId, descendents);
  },
);
