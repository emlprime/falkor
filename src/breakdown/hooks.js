import {propOr} from "ramda";
import {useSelector} from "react-redux";
import {
  getCurrentItem,
  getCurrentGoal,
  getByItem,
  getByParentId,
} from "../global/selectors";
import {getChildModel} from "../global/utils";
import {getAll as getAllProjects} from "../projects/selectors";
import {getAll as getAllQuarters} from "../quarters/selectors";
import {getAll as getAllReleases} from "../releases/selectors";
import {getAll as getAllSprints} from "../sprints/selectors";
import {getAll as getAllDays} from "../days/selectors";
import {getItemsByParent} from "../goals/selectors";
import {getSwimlanes} from "../tickets/selectors";

const modelGetAllSelectors = {
  projects: getAllProjects,
  quarters: getAllQuarters,
  releases: getAllReleases,
  sprints: getAllSprints,
  days: getAllDays,
};

export const useChosenFocus = () => {
  const item = useSelector(getCurrentItem);
  const {model} = item;
  const childModel = getChildModel(model);

  const goal = useSelector(getCurrentGoal);
  const getAllSelector = propOr(() => [], childModel, modelGetAllSelectors);

  const childrenSelector = getByParentId(getAllSelector, item);
  const columns = useSelector(childrenSelector);

  const {label} = useSelector(getByItem(item));

  const rows = useSelector(getItemsByParent(item));
  const swimlanes = useSelector(getSwimlanes(rows));

  return {model, label, rows, columns, swimlanes, goal};
};
