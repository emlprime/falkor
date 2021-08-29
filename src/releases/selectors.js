import * as R from "ramda";
import {createSelector} from "reselect";
import {NAME} from "./constants";

const {filter, propEq, propOr, prop, pathOr, map, pipe, values, tap} = R;

export const getAll = state => {
  const {byId} = state[NAME];
  console.log("byId:", NAME, byId, state);
  return values(byId);
};

export const getById = pathOr({}, [NAME, "byId"]);

export const getRecordIdsFor = parentId =>
  createSelector(
    getAll,
    records =>
      pipe(
        tap(console.log),
        filter(propEq("quarterId", parentId)),
        map(prop("id")),
      )(records),
  );

export const getRecordFor = id =>
  createSelector(
    getById,
    byId => propOr({}, id, byId),
  );
