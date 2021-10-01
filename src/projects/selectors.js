import * as R from "ramda";
import {createSelector} from "reselect";
import {makeGetAncestryByDescendents} from "../global/selectors";
import {NAME, PARENT_KEY} from "./constants";

const {filter, propEq, propOr, prop, pathOr, map, pipe, values} = R;

export const getAll = state => {
  const {byId} = state[NAME];
  return values(byId);
};

export const getById = pathOr({}, [NAME, "byId"]);

export const getRecordIdsFor = parentId =>
  createSelector(
    getAll,
    records =>
      pipe(
        filter(propEq("projectId", parentId)),
        map(prop("id")),
      )(records),
  );

export const getRecordFor = id =>
  createSelector(
    getById,
    byId => propOr({}, id, byId),
  );
export const getAncestryByDescendents = makeGetAncestryByDescendents(
  PARENT_KEY,
);
