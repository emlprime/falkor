import * as R from "ramda";
import {createSelector} from "reselect";
import {NAME} from "./constants";

const {propOr, pathOr, values} = R;

export const getAll = state => {
  const {byId} = state[NAME];
  return values(byId);
};

export const getById = pathOr({}, [NAME, "byId"]);

export const getRecordFor = id =>
  createSelector(
    getById,
    byId => propOr({}, id, byId),
  );
