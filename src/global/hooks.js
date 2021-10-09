import {useCallback} from "react";
import * as R from "ramda";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentAncestry, setCurrentGoal} from "./actions";
import {getItemsByParent} from "../goals/selectors";
import {knownStatuses as ks} from "./constants";
import {getAncestryByDescendents, getByParentId} from "./selectors";

const {append, curry, head, last, pick, pipe, propOr} = R;

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
        // PDS todo
      // this can't be head for all levels
      // do a find for the parent model
      const parentId = head(ancestry);
    const items = useSelector(getByParentId(getAllForModel, parentId));
    const itemsByStatus = useSelector(getGroupedByStatus(items));
    console.log(`itemsByStatus:`, itemsByStatus, items, parentId);

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
