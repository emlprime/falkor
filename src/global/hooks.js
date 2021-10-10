import {useCallback, useEffect} from "react";
import {useQuery} from "react-query";
import * as R from "ramda";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentAncestry, setCurrentGoal} from "./actions";
import {getItemsByParent} from "../goals/selectors";
import {knownStatuses as ks} from "./constants";
import {getAncestryByDescendents, getByParentId} from "./selectors";
import {actions as projectsActions} from "../projects/actions";
import {actions as releasesActions} from "../releases/actions";
import {actions as sprintsActions} from "../sprints/actions";
import {actions as ticketsActions} from "../tickets/actions";
import {actions as goalsActions} from "../goals/actions";

const {equals, prop, append, curry, head, last, pick, pipe, propOr} = R;
const actionsByModel = {
  projects: projectsActions,
  releases: releasesActions,
  sprints: sprintsActions,
  tickets: ticketsActions,
  goals: goalsActions,
};

const deriveFirstItemOfStatus = curry((itemsByStatus, ancestry, status) =>
  append(
    pipe(
      propOr([], status),
      head,
      pick(["model", "id"]),
    )(itemsByStatus),
    ancestry,
  ),
);

const useHandleClickStatus = curry(
  (ancestry, itemsByStatus, deriveSetCurrentByStatus, status) => {
    const dispatch = useDispatch();
    return useCallback(() => {
      dispatch(setCurrentAncestry(deriveSetCurrentByStatus(status)));
    }, [dispatch, ancestry, itemsByStatus]);
  },
);

export const useSetCurrentAncestryByStatus = curry(
  (getAllForModel, getGroupedByStatus, ancestry) => {
    const parentId = last(ancestry);
    const items = useSelector(getByParentId(getAllForModel, parentId));
    const itemsByStatus = useSelector(getGroupedByStatus(items));

    // curry method to get the first item of a given status for this model
    const deriveSetCurrentByStatus = deriveFirstItemOfStatus(
      itemsByStatus,
      ancestry,
    );

    // curry method to get the appropriate handle click for a given status
    const deriveHandleClickForStatus = useHandleClickStatus(
      ancestry,
      itemsByStatus,
      deriveSetCurrentByStatus,
    );

    // pre calc one method for each known status
    const handleClickResolved = deriveHandleClickForStatus(ks.RESOLVED);
    const handleClickActive = deriveHandleClickForStatus(ks.ACTIVE);
    const handleClickPlanned = deriveHandleClickForStatus(ks.PLANNED);

    // an object that converts the status into a dispatched click handler
    return {
      [ks.RESOLVED]: handleClickResolved,
      [ks.ACTIVE]: handleClickActive,
      [ks.PLANNED]: handleClickPlanned,
    };
  },
);

export const useSetCurrentAncestry = ancestry => {
  const dispatch = useDispatch();
  const item = last(ancestry);
  const goals = useSelector(getItemsByParent(item));
  const goal = head(goals);
  return useCallback(() => {
    dispatch(setCurrentAncestry(ancestry));
    dispatch(setCurrentGoal(goal));
  }, [dispatch, ancestry]);
};

export const useSetCurrentAncestryByItem = item => {
  const dispatch = useDispatch();

  const ancestry = useSelector(getAncestryByDescendents([item]));

  const goals = useSelector(getItemsByParent(item));
  const goal = head(goals);
  return useCallback(() => {
    dispatch(setCurrentAncestry(ancestry));
    dispatch(setCurrentGoal(goal));
  }, [dispatch, ancestry]);
};

export const useSetCurrentGoal = goalKey => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(setCurrentGoal(goalKey));
  }, [dispatch, goalKey]);
};

const fetchAll = model => async () =>
  await (await fetch(`http://localhost:5000/${model}`)).json();

export const useData = model => {
  const dispatch = useDispatch();

  const {data, status} = useQuery(model, fetchAll(model));

  useEffect(() => {
    if (equals("success", status)) {
      dispatch(prop(model, actionsByModel).loadData(data));
    }
  }, [data]);
};
