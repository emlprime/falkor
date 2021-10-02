import * as R from "ramda";
import {createSelector} from "reselect";
import {NAME} from "./constants";

const {filter, pick, propEq, propOr, prop, pathOr, map, pipe, values} = R;

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
        filter(propEq("releaseId", parentId)),
        map(prop("id")),
      )(records),
  );

export const getByParentKey = parentKey =>
  createSelector(
    getAll,
    records =>
      pipe(
        filter(propEq("releaseId", parentKey)),
        map(pick(["model", "id"])),
      )(records),
  );

export const getRecordFor = id =>
  createSelector(
    getById,
    byId => propOr({}, id, byId),
  );
