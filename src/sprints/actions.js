import {git} from "faker";
import * as t from "./actionTypes";

export const add = ({parentId, label}) => ({
  type: t.ADD,
  payload: {
    id: git.shortSha(),
    status: "PLANNED",
    scope: "sprints",
    releaseId: parentId,
    label,
  },
});

export const loadData = data => ({
  type: t.LOAD_DATA,
  payload: {data},
});

export const actions = {add, loadData};
