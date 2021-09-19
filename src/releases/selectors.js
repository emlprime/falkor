import * as R from "ramda";
import {createSelector} from "reselect";
import {NAME} from "./constants";

const {filter, pick, propEq, propOr, pathOr, map, pipe, values} = R;

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
        filter(propEq("quarterId", parentKey)),
        map(pick(["model", "id"])),
      )(records),
  );

export const getRecordFor = id =>
  createSelector(
    getById,
    byId => propOr({}, id, byId),
  );
