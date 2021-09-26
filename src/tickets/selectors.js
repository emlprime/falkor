import * as R from "ramda";
import {createSelector} from "reselect";
import {NAME} from "./constants";

const {
  allPass,
  append,
  curry,
  divide,
  equals,
  includes,
  filter,
  flip,
  groupBy,
  length,
  multiply,
  path,
  prop,
  propEq,
  propOr,
  propSatisfies,
  pick,
  pathOr,
  map,
  pipe,
  reduce,
  values,
} = R;

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
    byId => propOr({}, id, byId),
  );

const derivePercent = curry((total, amount) =>
  pipe(
    flip(divide)(total),
    multiply(100),
  )(amount),
);
const segmentReducer = ({prev, result, byStatus, calcPercent}, status) => {
  const current = pipe(
    propOr([], status),
    length,
    calcPercent,
  )(byStatus);
  return {
    prev: equals(100, prev) ? prev : current,
    result: equals(100, prev)
      ? result
      : append([status, [prev, current]], result),
    byStatus,
    calcPercent,
  };
};

const deriveSegments = tickets => {
  const totalTickets = length(tickets);
  const calcPercent = derivePercent(totalTickets);
  const byStatus = groupBy(prop("status"), tickets);
  return pipe(
    reduce(segmentReducer, {prev: 0, result: [], byStatus, calcPercent}),
    prop("result"),
  )(["RESOLVED", "ACTIVE", "PLANNED"]);
};

export const getSwimlanes = goals =>
  createSelector(
    getAll,
    tickets => {
      const isInGoals = propSatisfies(flip(includes)(goals), "goalId");
      const result = pipe(
        filter(isInGoals),
        groupBy(path(["goalId", "id"])),
        values,
        map(deriveSegments),
      )(tickets);
      // console.log(`result:`, JSON.stringify(result, null, 2), goals);

      return result;
    },
  );
