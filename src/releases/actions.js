import {git} from "faker";
import * as t from "./actionTypes";

export const add = ({parentId, label}) => ({
  type: t.ADD,
  payload: {
    id: git.shortSha(),
    status: "planned",
    scope: "releases",
    quarterId: parentId,
    label,
  },
});
