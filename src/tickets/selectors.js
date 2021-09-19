import * as R from "ramda";
import {createSelector} from "reselect";
import {NAME} from "./constants";

const {allPass, filter, propEq, propOr, pick, pathOr, map, pipe, values} = R;

export const getAll = state => {
  const {byId} = state[NAME];
  return values(byId);
};

export const getById = pathOr({}, [NAME, "byId"]);

export const getItemsByParentAndGoal = (parentId, goalId) =>
  createSelector(
    getAll,
    items =>
      pipe(
        filter(
          allPass([propEq("parentId", parentId), propEq("goalId", goalId)]),
        ),
        map(pick(["model", "id"])),
      )(items),
  );

export const getByItem = ({id}) =>
  createSelector(
    getById,
    byId => {
      console.log(`byId:`, byId);
      return propOr({}, id, byId);
    },
  );
