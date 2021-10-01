import * as R from "ramda";
import {useSelector} from "react-redux";
import {getCurrentItem, getCurrentGoal, getByItem} from "../global/selectors";
import {getByParentKey as getQuartersByParentKey} from "../quarters/selectors";
import {getByParentKey as getReleasesByParentKey} from "../releases/selectors";
import {getByParentKey as getSprintsByParentKey} from "../sprints/selectors";
import {getItemsByParent} from "../goals/selectors";
import {getSwimlanes} from "../tickets/selectors";

const {prop} = R;

const selectorsByModel = {
  projects: getQuartersByParentKey,
  quarters: getReleasesByParentKey,
  releases: getSprintsByParentKey,
};

export const useChosenFocus = () => {
  const item = useSelector(getCurrentItem);
  const {model} = item;

  const goal = useSelector(getCurrentGoal);
  const childrenSelector = prop(model, selectorsByModel);
  const columns = useSelector(childrenSelector(item));

  const {label} = useSelector(getByItem(item));

  const rows = useSelector(getItemsByParent(item));
  const swimlanes = useSelector(getSwimlanes(rows));

  return {model, label, rows, columns, swimlanes, goal};
};
