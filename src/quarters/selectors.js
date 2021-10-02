import * as R from "ramda";
import {createSelector} from "reselect";
import {NAME} from "./constants";

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
