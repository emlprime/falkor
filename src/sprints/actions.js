import {git} from "faker";
import * as t from "./actionTypes";

export const add = ({parentKey, label}) => ({
  type: t.ADD,
  payload: {
    id: git.shortSha(),
    status: "PLANNED",
    scope: "sprints",
    releaseId: parentKey,
    label,
  },
});

export const loadData = data => ({
  type: t.LOAD_DATA,
  payload: {data},
});

export const actions = {add, loadData};
