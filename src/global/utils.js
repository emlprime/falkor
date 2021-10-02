import {
  curry,
  takeWhile,
  propEq,
  not,
  pipe,
  dec,
  equals,
  inc,
  flip,
  nth,
  findIndex,
} from "ramda";
import {scopes} from "./constants";

export const getChildModel = model =>
  pipe(
    findIndex(equals(model)),
    inc,
    flip(nth)(scopes),
  )(scopes);

export const getParentModel = model =>
  pipe(
    findIndex(equals(model)),
    dec,
    flip(nth)(scopes),
  )(scopes);

const isModelNot = model =>
  pipe(
    propEq("model", model),
    not,
  );

export const clipAncestry = curry((model, ancestry) =>
  takeWhile(isModelNot(model), ancestry),
);
