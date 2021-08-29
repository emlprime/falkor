import * as R from "ramda";
import {createSelector} from "reselect";
import {NAME} from "./constants";

const {prop, pathOr} = R;

export const getAll = state => state[NAME];

export const getCurrent = state => pathOr({}, [NAME, "current"], state);

export const getCurrentScope = () =>
  createSelector(
    getCurrent,
    current => prop("scope", current),
  );

const getCurrentIdFor = key =>
  createSelector(
    getCurrent,
    current => prop(key, current),
  );

export const getCurrentQuarterId = getCurrentIdFor("quarterId");
export const getCurrentReleaseId = getCurrentIdFor("releaseId");
