import axios from "axios";
import {
  curry,
  takeWhile,
  propEq,
  not,
  prop,
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

export const makePostRecord = model => async newRecord => {
  const data = prop("payload", newRecord);
  await (await axios.post(`http://localhost:5000/${model}`, data)).data;
};
