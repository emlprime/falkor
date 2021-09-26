import * as R from "ramda";
import {createSelector} from "reselect";
import {NAME} from "./constants";

const {
  add,
  allPass,
  always,
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
  when,
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
const maxValue = 99.9;
const segmentReducer = ({prev, result, byStatus, calcPercent}, status) => {
  const current = pipe(
    propOr([], status),
    length,
    calcPercent,
    add(prev),
    when(equals(100), always(maxValue)),
  )(byStatus);

  const hasValue = equals(maxValue, prev);
  const start = prev;
  const end = current;
  console.log(`foo:`, status, start, end, hasValue);

  return {
    prev: hasValue ? prev : current,
    result: append([status, [start, end]], result),
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

const mockResult = [
  [["RESOLVED", [0, 99.9]], ["ACTIVE", [0, 0]], ["PLANNED", [0, 0]]],
  [["RESOLVED", [0, 40]], ["ACTIVE", [40, 60]], ["PLANNED", [60, 100]]],
  [["RESOLVED", [0, 20]], ["ACTIVE", [20, 60]], ["PLANNED", [60, 100]]],
  [["RESOLVED", [0, 40]], ["ACTIVE", [40, 60]], ["PLANNED", [60, 100]]],
];
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
      console.log(`result:`, R.toString(result, null, 2));

      console.log(`mockResult:`, R.toString(mockResult, null, 2));

      return result;
    },
  );
