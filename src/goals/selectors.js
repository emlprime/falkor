import * as R from "ramda";
import {createSelector} from "reselect";
import {NAME} from "./constants";

const {filter, propEq, propOr, pick, pathOr, map, pipe, values} = R;

export const getAll = state => {
  const {byId} = state[NAME];
  return values(byId);
};

export const getById = pathOr({}, [NAME, "byId"]);

export const getItemsByParent = parentKey =>
  createSelector(
    getAll,
    items =>
      pipe(
        filter(propEq("parentKey", parentKey)),
        map(pick(["model", "id"])),
      )(items),
  );

export const getByItem = ({id}) =>
  createSelector(
    getById,
    byId => propOr({}, id, byId),
  );
