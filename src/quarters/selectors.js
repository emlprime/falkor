import * as R from "ramda";
import {createSelector} from "reselect";
import {NAME} from "./constants";

const {filter, propEq, prop, map} = R;

export const getAll = state => {
  const {allIds, byId} = state[NAME];
  return map(id => prop(id, byId), allIds);
};

export const getRecordsFor = parentId =>
  createSelector(
    getAll,
    records => filter(propEq("projectId", parentId), records),
  );
