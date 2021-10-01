import * as R from "ramda";
import {createSelector} from "reselect";
import {makeGetAncestryByDescendents} from "../global/selectors";
import {NAME, PARENT_KEY} from "./constants";

const {
  filter,
  groupBy,
  map,
  pick,
  prop,
  propEq,
  propOr,
  pathOr,
  pipe,
  values,
} = R;

export const getAll = state => {
  const {byId} = state[NAME];
  return values(byId);
};

export const getById = pathOr({}, [NAME, "byId"]);

export const getByParentKey = parentKey =>
  createSelector(
    getAll,
    records =>
      pipe(
        filter(propEq("projectId", parentKey)),
        map(pick(["model", "id"])),
      )(records),
  );

export const getRecordFor = id =>
  createSelector(
    getById,
    byId => propOr({}, id, byId),
  );

export const getGroupedByStatus = items =>
  createSelector(
    getById,
    byId =>
      pipe(
        map(({id}) => prop(id, byId)),
        groupBy(prop("status")),
      )(items),
  );

export const getAncestryByDescendents = makeGetAncestryByDescendents(
  PARENT_KEY,
);
