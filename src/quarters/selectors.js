import * as R from "ramda";
import {createSelector} from "reselect";
import {NAME} from "./constants";

const {filter, propEq, prop, map, pipe} = R;

export const getAll = state => {
  const {allIds, byId} = state[NAME];
  return map(id => prop(id, byId), allIds);
};

export const getRecordIdsFor = parentId =>
  createSelector(
    getAll,
    records =>
      pipe(
        filter(propEq("projectId", parentId)),
        map(prop("id")),
      )(records),
  );
